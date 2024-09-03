file = open("exemplo.txt")
if(file == null):
    print("Erro")
# Ler a partir de uma arquivo que não existe
print(file.read())
print("Programa continua executando.")
try:
    x = open('exemplo.txt')
except FileNotFoundError as e:
    print("Arquivo não existe!" )
print("Programa continua executando...")