#Monter et build les containers (Express et MongoDb)(Docker doit être lancé):
docker-compose up --build 

#Monter les container sans build:
docker-compose up

#vider le cache de docker
docker system prune -a