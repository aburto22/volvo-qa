# QS test for Volvo

This projects consists in running end-to-end (e2e) tests for volvo "A million more campaign". Here, I include e2e tests for several sections on the page, such as the intro, videos, carousel and testimonies.

This project focuses on testing only specifics to the website, such as the text correctness, videos autoplay, pause and play, and that some content is only loaded after it is scrolled in view. External packages, such as the carousel, are not tested, as it is assumed that the package it is thoroughly tested by the package owner.

## Run the project

This project can be run in docker or locally.

### Running locally

Start by installing dependencies running `npm install`. Then, simply start the tests by running `npm run wdio`. The tests will start running and you will see a summary report on the terminal.

### Running on a docker container

Start by building the docker container running `docker build -t wdio-image .`. Then, run the container by running `docker run --name wdio wdio-image`. The tests will start running and you will see a summary report on the terminal.

## Reporting

The summary / spec reporting can be obtained from the terminal. Here, you can find passing and failing tests. A more graphical report is also generated, and can be obtained in `reports/timeline-report.html`.

## Other considerations

There are a couple of things to note:

1. We have included allowed for up to 10 instances of browsers to be open, so at the most, 10 tests can be run in parallel.
2. For the full-screen regression test, we have allowed for a 7% mismatch. This is to account for the video that is autoplaying on the website. Sometimes, it might take a bit longer for the browser to stop playing the video, and if the image is not the same, the test will fail. This percentage accounts for it.
