from script.demo.common.util import *

poco = get_poco()


def open_login_page():
    if exists(Template(get_page_path() + "/menu/screenshot/login2.png")):
        touch(Template(get_page_path() + "/menu/screenshot/login2.png"))
    else:
        touch(Template(get_page_path() + "/menu/screenshot/login.png"))


def open_home_page():
    touch(Template(get_page_path() + "/menu/screenshot/home.png"))


def open_swipe_page():
    touch(Template(get_page_path() + "/menu/screenshot/swipe.png"))


def open_swipe_with_poco():
    poco("Swipe").click()


def open_forms_page():
    touch(Template(get_page_path() + "/menu/screenshot/forms.png"))


def open_forms_with_poco():
    poco("Forms").click()


def open_swipe_page():
    touch(Template(get_page_path() + "/menu/screenshot/swipe.png"))


def open_drag_with_poco():
    poco("Drag").click()


def open_web_view_with_poco():
    poco("Webview").click()


def open_web_view_page():
    touch(Template(get_page_path() + "/menu/screenshot/webview.png"))
