load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

RULES_DOCKER_TAG = "e1701495705a15d2fb7613f39eb01c9de6d1bd1a"
RULES_DOCKER_EXTERNAL_SHA = "fd4c44fada22e25d2f4aaee5f46fbbd6d3a5aa1860fe8eb661c9921542d8fe54"

def fetch_docker_dependencies():
    http_archive(
        name = "io_bazel_rules_docker",
        sha256 = RULES_DOCKER_EXTERNAL_SHA,
        strip_prefix = "rules_docker-%s" % RULES_DOCKER_TAG,
        urls = ["https://github.com/bazelbuild/rules_docker/archive/%s.tar.gz" % RULES_DOCKER_TAG],
    )