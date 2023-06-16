from pathlib import Path
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

APP_DIR = Path(__file__).parent.parent


def get_data_dir():
    """return directory containing the data files"""
    return APP_DIR / "data"


@api_view(['GET'])
def data_files(request):
    if request.method == 'GET':
        data_dir = get_data_dir()
        files = data_dir.glob("*.csv")
        print(files)
        # result is a simple dict for now
        result = {"files": sorted([fn.name for fn in files])}
        return Response(result)

