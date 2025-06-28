import os

broker_url = os.getenv("CELERY_BROKER_URL")
result_backend = os.getenv("CELERY_RESULT_BACKEND")

task_serializer = 'json'
result_serializer = 'json'
accept_content = ['json']

# Add this setting to handle broker connection retries during startup
# This addresses the deprecation warning for Celery 6.0 compatibility
broker_connection_retry_on_startup = True
