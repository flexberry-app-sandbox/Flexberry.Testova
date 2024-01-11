docker build --no-cache -f SQL\Dockerfile.PostgreSql -t testova-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t testova-java/app ../../..
