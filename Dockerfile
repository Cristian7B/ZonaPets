FROM python:3.10.4-alpine3.16

WORKDIR /app

RUN  apk update \
	&& apk add --no-cache gcc musl-dev postgresql-dev python3-dev libffi-dev \
	&& pip install --upgrade pip

COPY ./requirements.txt /app/ 

RUN pip install -r requirements.txt

COPY ./ /app/

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]