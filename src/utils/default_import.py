import re
import os


# Función de reemplazo para convertir las importaciones
def replace_import(match):
    components = [str(c).strip() for c in match.group(1).split(",")]
    # print(components)
    imports = "\n".join(
        [
            f'import {component} from "@mui/material/{component}";'
            for component in components
        ]
    )
    # print(imports)
    return imports


def convert_imports(file_path):
    # Expresión regular para buscar importaciones de Material UI
    pattern = r"import {([^}]*)} from \"@mui/material\";"

    # Leer el contenido del archivo
    with open(file_path, "r") as file:
        code = file.read()

    # Realizar el reemplazo utilizando la expresión regular y la función de reemplazo
    if re.search(pattern, code):
        converted_code = re.sub(pattern, replace_import, code)
        # Escribir el código convertido de nuevo en el archivo
        with open(file_path, "w") as file:
            file.write(converted_code)
            print(f"Archivo modificado {os.path.relpath(file_path)}")
    else:
        print(f"Nada por hacer en {os.path.relpath(file_path)}")


# Ruta del directorio de tu proyecto
project_path = "../../src"

# Iterar sobre los archivos en el directorio
for root, dirs, files in os.walk(project_path):
    for file_name in files:
        # Comprobar si el archivo es un archivo JavaScript o JSX
        if file_name.endswith(".js") or file_name.endswith(".jsx"):
            # Obtener la ruta completa del archivo
            file_path = os.path.join(root, file_name)

            # Aplicar la conversión de importaciones al archivo
            convert_imports(file_path)
