from poco.drivers.android.uiautomation import AndroidUiautomationPoco
from poco.drivers.ios import iosPoco
from airtest.core.api import *
from script.bank.util.config import *


def is_android():
    if get_platform() == "Android":
        return True
    else:
        return False


def get_platform():
    if os.getenv("PLATFORM"):
        return os.getenv("PLATFORM")
    else:
        return read_config_file().get('platform')


def get_package_name():
    if is_android():
        return read_config_file().get("android").get("package_name")
    else:
        return read_config_file().get("ios").get("package_name")


def get_app_name():
    if is_android():
        return read_config_file().get("android").get("app_name")
    else:
        return read_config_file().get("ios").get("app_name")


def get_device():
    if os.getenv("DEVICE"):
        return os.getenv("DEVICE")
    if is_android():
        return read_config_file().get("android").get("device")
    else:
        return read_config_file().get("ios").get("device")


def get_page_path():
    path = os.path.abspath(os.path.join(os.path.dirname(__file__), "../"))
    return path + "/page"


def get_root_path():
    return os.path.abspath(os.path.join(os.path.dirname(__file__), "../"))


def get_app_package():
    path = os.path.abspath(os.path.join(os.path.dirname(__file__), "../"))
    return path + "/package/" + get_package_name()


def get_poco():
    if is_android():
        return AndroidUiautomationPoco()
    else:
        return iosPoco


def get_match_png(png_list, png_path):
    for png in png_list:
        if exists(Template(get_page_path() + "/swipe/screenshot/" + png)):
            return png_path + png


def get_exist_element_text(text_list):
    poco = get_poco()
    for text_value in text_list:
        if poco(text=text_value).exists():
            print("exist element text is " + text_value)
            return text_value
