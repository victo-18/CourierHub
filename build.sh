#bin/bash/
export GCM_CREDENTIAL_STORE=secretservice

rm -r ../server-courierhub/dist/
cp -r ./dist/ ../server-courierhub/dist/

cd ../server-courierhub/
git add dist/
git commit -m "build $(date +%s) ($(date +"%Y-%m-%d %H:%M:%S"))"
git push origin server
