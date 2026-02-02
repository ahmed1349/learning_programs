# Django Server

This directory will contain the Django backend server for the Learning programs platform.

## Setup (Future)

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Install dependencies
pip install django djangorestframework django-cors-headers

# Run migrations
python manage.py migrate

# Create superuser
python manage.py createsuperuser

# Run server
python manage.py runserver
```

## Structure

- `config/` - Django project settings
- `apps/` - Django applications
- `manage.py` - Django management script

