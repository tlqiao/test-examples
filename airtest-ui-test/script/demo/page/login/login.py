from script.demo.common.util import *

poco = get_poco()


def login_app(email, password):
    # touch(Template(get_page_path() + "/login/screenshot/loginMenu.png", rgb=True))
    poco(text="Login").click()
    # touch(Template(get_page_path() + "/login/screenshot/email.png"))
    # text(name)
    # touch(Template(get_page_path() + "/login/screenshot/password.png"))
    # text(password)
    poco("input-email").set_text(email)
    poco("input-password").set_text(password)
    poco(text="LOGIN").click()
    poco(text="You are logged in!").exists()
    poco(text="OK").click()
    # touch(Template(get_page_path() + "/login/screenshot/loginButton.png", rgb=True))


def sign_up(email, password):
    poco(text="Sign up").click()
    # touch(Template(get_page_path() + "/login/screenshot/email.png"))
    # text(name)
    # touch(Template(get_page_path() + "/login/screenshot/password.png"))
    # text(password)
    # touch(Template(get_page_path() + "/login/screenshot/confirmPassword.png"))
    # text(password)
    poco("input-email").set_text(email)
    poco("input-password").set_text(password)
    poco("input-repeat-password").set_text(password)
    poco(text="SIGN UP").click()
    poco(text="You successfully signed up!").exists()
    poco(text="OK").click()
