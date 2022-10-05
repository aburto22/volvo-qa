# QS test for Volvo

This projects consist in running end-to-end (e2e) tests for volvo "A million more campaign". Here, I include e2e tests for several elements of the page, such as the intro, videos, carousel and testimonies.

This project focuses on testing only specifics to the website, such as the text being correct, videos autoplay, pause and play correctly, and that some content is only loaded after it is scrolled in view. External packages, such as the carousel, are not tested, as it is assumed that the package it is thoroughly tested by the package owner.

## Run the project

This project can be run in docker or locally.

### Running locally

Start by installing dependencies running `npm install`. Then, simply start the tests by running `npm run wdio`. The tests will start running and you will see a summary report on the terminal.

### Running on a docker container

Start by building the docker container running `docker build -t wdio-image .`. Then, run the container by running `docker run --name wdio wdio-image`
