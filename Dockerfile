FROM java:8-alpine
MAINTAINER Mark Madden <mmadden1495@gmail.com>

ADD target/uberjar/ackiban.jar /ackiban/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/ackiban/app.jar"]
