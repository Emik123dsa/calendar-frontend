workspace(
    name = "calendar-frontend",
    managed_directories = {"@npm": ["node_modules"]},
)

load("//:tools/bazel_deps.bzl", "fetch_dependencies")

load("//:tools/bazel_docker_deps.bzl", "fetch_docker_dependencies")

fetch_dependencies()

load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "yarn_install")

node_repositories(
    node_version = "12.19.1",
    yarn_version = "1.22.10",
    node_repositories = {
        "12.19.1-darwin_amd64": ("node-v12.19.1-darwin-x64.tar.gz", "node-v12.19.1-darwin-x64", "3cb491abc1f643bb71ef40722291c2fee0b75ed52b333ea71aa67de005757251"),
        "12.19.1-linux_arm64": ("node-v12.19.1-linux-arm64.tar.xz", "node-v12.19.1-linux-arm64", "cc413f587a72c34e8f65f0cd8a4137583aa5efac2b950c892deab22c403ad785"),
        "12.19.1-linux_amd64": ("node-v12.19.1-linux-x64.tar.xz", "node-v12.19.1-linux-x64", "1436dbc34383abbe5e921e9744e527cd24c690e7b0362a39fb960795a23a7a03"),
        "12.19.1-windows_amd64": ("node-v12.19.1-win-x64.zip", "node-v12.19.1-win-x64", "a9390166ca69ce678f32d84672449c9fb200aea6505140211f7ae5b6939611a1"),
    },
    yarn_repositories = {
        "1.22.10": ("yarn-v1.22.10.tar.gz", "yarn-v1.22.10", "7e433d4a77e2c79e6a7ae4866782608a8e8bcad3ec6783580577c59538381a6e"),
    },
    node_urls = ["https://nodejs.org/dist/v{version}/{filename}"],
    yarn_urls = ["https://github.com/yarnpkg/yarn/releases/download/v{version}/{filename}"],
    package_json = ["//:package.json"]
)

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    quiet = False,
    data = [
        "//:patches/jest-haste-map+27.0.2.patch",
    ],
    symlink_node_modules = True,
    yarn_lock = "//:yarn.lock",
)

fetch_docker_dependencies()

# load(
#     "@io_bazel_rules_docker//repositories:repositories.bzl",
#     container_repositories = "repositories",
# )

# container_repositories()

# load("@io_bazel_rules_docker//repositories:deps.bzl", container_deps = "deps")

# container_deps()

# load(
#     "@io_bazel_rules_docker//nodejs:image.bzl",
#     nodejs_image_repositories = "repositories",
# )

# nodejs_image_repositories()