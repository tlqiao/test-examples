from script.bank.util.helper import *

poco = get_poco()


def go_to_life_pay_page():
    poco(text="生活缴费").click()
