from airtest.core.api import *
from script.bank.util.helper import *

poco = get_poco()


def go_to_more_application():
    touch(Template(get_page_path() + "/initpage/screenshot/more_menu.png"))
    # poco(text="更多").click()


def go_to_pay_telephone_charge():
    touch(Template(get_page_path() + "/initpage/screenshot/pay_telephone_charge_menu.png"))
    # poco(text="话费充值").click()
