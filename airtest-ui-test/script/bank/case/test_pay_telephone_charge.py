import pytest
from script.bank.page.initpage.navigate_in_init_page import *
from script.bank.page.moreapplication.navigate_in_more_application import *
from script.bank.page.moreapplication.navigate_in_life_menu import *
from script.bank.page.mobilecommunication.pay_telephone_charge import *
from script.bank.page.moreapplication.navigate_in_life_pay_menu import *


def setup_module():
    go_to_more_application()
    go_to_life_menu()
    go_to_life_pay_page()
    go_to_mobile_communication_page()


@pytest.mark.parametrize('organization, phone_number, fee',
                         [('四川电信', '18181972618', 1.00), ('四川联通', '18181972618', 1.00)])
def test_should_pay_fee_successfully(organization, phone_number, fee):
    select_organization(organization)
    search_phone_number(phone_number)
    back_to_select_organization_screen()
    # submit_pay(fee)
    # confirm_pay(fee)
# setup_function()
