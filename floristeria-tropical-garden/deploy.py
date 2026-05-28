from ftplib import FTP, error_perm
from pathlib import Path
import os, mimetypes

HOST=os.environ.get('FTP_HOST','ftp.robertoalmela.com')
USER=os.environ.get('FTP_USER','hermes')
PASS=os.environ.get('FTP_PASS')
REMOTE=os.environ.get('FTP_REMOTE','web-deploy/tropical-garden')
LOCAL=Path(__file__).parent
if not PASS:
    raise SystemExit('FTP_PASS env var required')

def ensure_dir(ftp, path):
    cur=ftp.pwd()
    for part in path.strip('/').split('/'):
        if not part: continue
        try: ftp.mkd(part)
        except error_perm: pass
        ftp.cwd(part)
    ftp.cwd(cur)

def upload_file(ftp, local, remote):
    parent='/'.join(remote.split('/')[:-1])
    if parent: ensure_dir(ftp,parent)
    with open(local,'rb') as fh:
        ftp.storbinary(f'STOR {remote}', fh, blocksize=1024*1024)

with FTP(HOST, USER, PASS, timeout=120) as ftp:
    ftp.set_pasv(True)
    print('PWD', ftp.pwd())
    for path in LOCAL.rglob('*'):
        if path.is_file() and path.name not in {'deploy.py'}:
            rel=path.relative_to(LOCAL).as_posix()
            remote=f'{REMOTE}/{rel}'
            upload_file(ftp, path, remote)
            print('uploaded', remote)
    ftp.cwd(REMOTE)
    print('REMOTE LIST', ftp.nlst()[:20])
