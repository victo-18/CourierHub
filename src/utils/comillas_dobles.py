import os
import re


def convert_quotes(file_path):
    # Leer el contenido del archivo
    with open(file_path, "r") as file:
        code = file.read()

    # Verificar si el archivo contiene comillas simples
    if re.search(r"'(.*?)'", code):
        # Aplicar la conversión de comillas al archivo
        converted_code = re.sub(r"'(.*?)'", r'"\1"', code)

        # Escribir el código convertido de nuevo en el archivo
        with open(file_path, "w") as file:
            file.write(converted_code)


# Ruta del directorio de tu proyecto
project_path = "../../src"

# Iterar sobre los archivos en el directorio
for root, dirs, files in os.walk(project_path):
    for file_name in files:
        # Comprobar si el archivo es un archivo JavaScript o JSX
        if file_name.endswith((".js", ".jsx")):
            # Obtener la ruta completa del archivo
            file_path = os.path.join(root, file_name)

            # Convertir las comillas en el archivo
            convert_quotes(file_path)
