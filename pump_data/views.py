import csv
import json
from pathlib import Path
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.http import JsonResponse

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
        return Response(result, status=status.HTTP_200_OK)


@api_view(['GET'])
def data_file(request, filename=None):
    '''
    Load a single requested csv file from pump data directory
    '''
    if request.method == 'GET':
        data_dir = get_data_dir()
        file_path = None
        if filename:
            file_path = data_dir / filename
            if file_path.exists():
                # read csv lines into variable csv_file
                with open(file_path, 'r', newline='\n') as csv_file:
                    # convert to dict
                    csv_data = csv.DictReader(csv_file)
                    # serialize to json
                    json_data = json.dumps([row for row in csv_data])
                    # return response
                    return JsonResponse(json_data, safe=False,
                                        content_type='application/json',
                                        status=status.HTTP_200_OK,
                                        )
        return Response({'error': 'Pump data file not found.'},
                        status=status.HTTP_404_NOT_FOUND)
