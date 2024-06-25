from script.bank.util.helper import *

poco = get_poco()


def go_to_mobile_communication_page():
    poco(text="移动通讯").click()
    poco("android.widget.TextView").wait_for_appearance()
