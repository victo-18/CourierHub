cp ../db/CourierHub.sql ./CourierHub.sql
#server-courrierhub/test/build.sh
docker build -t \
courrier_hub_db . && \
docker run --rm -i -p 5432:5432 \
--name courrierhub_db courrier_hub_db