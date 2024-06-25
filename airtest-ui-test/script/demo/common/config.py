import os
import yaml


def read_config_file():
    path = os.path.abspath(os.path.join(os.path.dirname(__file__), "../"))
    path = path + "/config/config.yaml"
    f = open(path, 'r')
    yaml_content = yaml.safe_load(f.read())
    return yaml_content
