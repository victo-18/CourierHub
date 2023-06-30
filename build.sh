# https://api.render.com/deploy/srv-cif6j195rnujc4ph1hr0?key=HEaYw4dk_JE
# bin/bash/
export GCM_CREDENTIAL_STORE=secretservice

rm -r ../server-courierhub/dist/
cp -r ./dist/ ../server-courierhub/dist/

cd ../server-courierhub/
git add dist/
git commit -m "build $(date +%s) ($(date +"%Y-%m-%d %H:%M:%S"))"
git push origin server

curl -X GET https://api.render.com/deploy/srv-cif6j195rnujc4ph1hr0?key=HEaYw4dk_JE
