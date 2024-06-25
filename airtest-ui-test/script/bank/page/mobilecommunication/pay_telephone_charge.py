from script.bank.util.helper import *

poco = get_poco()


def select_organization(organization_name):
    poco(text=organization_name).click()


def search_phone_number(phone_number):
    poco("android.widget.EditText").set_text(phone_number)
    keyevent("KEYCODE_ENTER")
    poco("android.widget.Button").click()
    snapshot(filename=get_root_path() + "/micoo/snapshot/phone_number_search.png")
    # poco(text=phone_number).wait_for_appearance()


def back_to_select_organization_screen():
    close_message_dialog()
    keyevent("BACK")


def submit_pay(charge):
    poco("android.widget.EditText").set_text(charge)
    poco(text="提交").click()


def should_show_error_message(message):
    assert_exists(poco(text=message))


def close_message_dialog():
    poco(text="确认").click()


def confirm_pay(charge):
    assert_exists(poco(text=charge))
    poco(text="确认").click()
