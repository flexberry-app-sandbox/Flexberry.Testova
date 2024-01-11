docker build --no-cache -f SQL\Dockerfile.PostgreSql -t testova/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t testova/app ../..
