from script.demo.common.util import *
from airtest.core.api import *

poco = get_poco()


def open_api_menu():
    wait(Template(get_page_path() + "/webview/screenshot/person.png"))
    # poco("com.wdiodemoapp:id/action_bar_root").offspring("android.widget.Button").click()
    touch(Template(get_page_path() + "/webview/screenshot/menu2.png", threshold=0.5, target_pos=4))
    poco(text="API").click()
    poco("docsearch-input").set_text("appium")
    poco(text="Cancel").click()