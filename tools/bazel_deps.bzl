load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")

RULES_NODE_JS_TAG = "3.5.1"
RULES_NODE_JS_EXTERNAL_SHA = "4a5d654a4ccd4a4c24eca5d319d85a88a650edf119601550c95bf400c8cc897e"

RULES_SKYLIB_TAG = "1.0.3"
RULES_SKYLIB_EXTERNAL_SHA = "4a5d654a4ccd4a4c24eca5d319d85a88a650edf119601550c95bf400c8cc897e"

def fetch_dependencies():
    http_archive(
        name = "build_bazel_rules_nodejs",
        sha256 = RULES_NODE_JS_EXTERNAL_SHA,
        urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/%s/rules_nodejs-%s.tar.gz" % (RULES_NODE_JS_TAG, RULES_NODE_JS_TAG)],
    )
    http_archive(
        name = "bazel_skylib",
        urls = [
            "https://github.com/bazelbuild/bazel-skylib/releases/download/%s/bazel-skylib-%s.tar.gz" % (RULES_SKYLIB_TAG, RULES_SKYLIB_TAG),
            "https://mirror.bazel.build/github.com/bazelbuild/bazel-skylib/releases/download/%s/bazel-skylib-%s.tar.gz" % (RULES_SKYLIB_TAG, RULES_SKYLIB_TAG),
        ],
        sha256 = RULES_SKYLIB_EXTERNAL_SHA
    )