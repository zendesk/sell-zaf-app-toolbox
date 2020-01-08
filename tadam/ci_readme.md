# CI using TaDaM setup

Jenkins will execute the builds of `sell-demo-app` by starting `docker-compose` with

```bash
docker-compose up -d
```

This `docker-compose` starts by building `Dockerfile` which you can use to manipulate build environment.
Then it'll execute stages in `WORKDIR` of the started `Dockerfile`. Stages goes as follows:

1. Run `tadam/install_dependencies.sh`
2. Run in parallel:
   - `tadam/linter.sh`
   - `tadam/tests.sh`
3. Run `tadam/build_artifacts.sh`
4. Upload built artifacts to S3

If any stage fails, build is aborted and no further stages are executed.

As you can see, one can manipulate what commands are run in each stage by simply modifying one of `tadam/*.sh` scripts. 