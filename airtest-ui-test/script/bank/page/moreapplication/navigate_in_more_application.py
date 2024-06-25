from script.bank.util.helper import *

poco = get_poco()
menu_list = ["我的持仓", "财富", "支付", "信用卡", "贷款", "出境和外币服务", "生活", "网店"]


def go_to_life_menu():
    go_to_menu("生活")
    snapshot(filename=get_root_path() + "/micoo/snapshot/life_screen.png")


def go_to_menu(menu_text):
    if menu_text == "查询" or menu_text == "转账":
        poco("android.support.v7.app.ActionBar$Tab").child(text=menu_text).click()
    i = 0
    while not poco(text=menu_text).exists() and i < 5:
        print("expect menu_text does not exist, swipe left")
        poco(text=get_exist_element_text(menu_list)).swipe([-0.8, 0])
        i = i+1
    poco(text=menu_text).click()