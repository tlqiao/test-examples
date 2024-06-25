from micooc import new_build


def test_new_build():
    service_host = "http://localhost:8123"
    engine_host = service_host + "/engine"
    api_key = "AK9cba5c6caa932e49bb"
    pid = "PIDc7984d6283db4249b1b6ea569db45d98"
    build_version = 1
    screenshot_directory = "./snapshot"

    return new_build(engine_host, api_key, pid, build_version, screenshot_directory)


test_new_build()
