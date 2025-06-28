from unittest.mock import patch, MagicMock
from flask import Flask


# Patch BEFORE any application code is imported!
@patch("application.core.mongo_db.MongoDB.get_client", return_value=MagicMock())
def test_app_config(mocked_client):
    from application.api.answer.routes import answer
    from application.api.internal.routes import internal
    from application.api.user.routes import user
    from application.core.settings import settings

    app = Flask(__name__)
    app.register_blueprint(user)
    app.register_blueprint(answer)
    app.register_blueprint(internal)
    app.config["UPLOAD_FOLDER"] = "inputs"
    app.config["CELERY_BROKER_URL"] = settings.CELERY_BROKER_URL
    app.config["CELERY_RESULT_BACKEND"] = settings.CELERY_RESULT_BACKEND
    app.config["MONGO_URI"] = settings.MONGO_URI

    assert app.config["UPLOAD_FOLDER"] == "inputs"
    assert app.config["CELERY_BROKER_URL"] == settings.CELERY_BROKER_URL
    assert app.config["CELERY_RESULT_BACKEND"] == settings.CELERY_RESULT_BACKEND
    assert app.config["MONGO_URI"] == settings.MONGO_URI
