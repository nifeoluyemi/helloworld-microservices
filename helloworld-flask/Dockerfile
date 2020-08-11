FROM python:3.7.3-slim

RUN apt-get update && apt-get -y install netcat && apt-get clean

WORKDIR /helloworld-flask

COPY ./requirements.txt ./

RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000

CMD [ "python", "run.py" ]