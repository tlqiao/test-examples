from script.demo.common.util import *


def exist(app_name):
    dev = device()
    try:
        if dev.check_app(app_name):
            return True
        else:
            return False
    except Exception as e:
        print(e)
        return False


def open_app(package_path, app_name):
    if exist(app_name):
        print("app has exist,uninstall it")
        # uninstall(app_name)
        # print("uninstall successfully")
        # install(package_path)
        # print("install app successfully")
        clear_app(app_name)
        print("clear app successfully")
        start_app(app_name)
        print("start app successfully")

    else:
        clear_app(app_name)
        print("clear app successfully")
        install(package_path)
        print("install app successfully")
        start_app(app_name)
        print("start app successfully")


def connect_exe_device():
    try:
        if is_android():
            dev = connect_device("Android://127.0.0.1:5037/" + get_device())
        else:
            dev = init_device("ios")
    except Exception as e:
        print(e)
        print("connect  device failed")
    return dev


def start_simulator(path, app_name):
    connect_exe_device()
    open_app(path, app_name)


def start_default_app():
    start_simulator(get_app_package(), get_app_name())


def run_shell(command):
    dev = connect_exe_device()
    print("begin to run shell command")
    dev.shell(command)
