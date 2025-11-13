// ===================================================================
// 1. JSON DE PREGUNTAS (El que tú proporcionaste)
// ===================================================================
const json_preguntas = [
  {
    "Enunciado": "1) Variables SQL:",
    "Respuestas Incorrectas": [
      "Son específicas de cada consulta y son ejecutadas automáticamente al realizar la conexión.",
      "Comienzan con \"@\" (arroba) seguido del nombre (sin espacios), dicho nombre no puede contener cualquier carácter.",
      "Una variable debe ser declarada al final para usarse en el codigo anterior.",
      "Todas las respuestas ANTERIORES son correctas",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Permiten almacenar un valor y recuperarlo más adelante para emplearlos en otras sentencias.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Variables SQL - Caracteristicas:",
    "Respuestas Incorrectas": [
      "Existen variables globales en SQL Server.",
      "Una variable declarada existe dentro de todo el entorno de trabajo.",
      "Una variable a la cual no se le ha asignado un valor contiene \"0\" (Cero).",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Puede declarar varias variables en una misma sentencia.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Variables SQL - Caracteristicas:",
    "Respuestas Incorrectas": [
      "Solo se puede declarar varias variables en una misma sentencia.",
      "Existen variables globales en SQL Server.",
      "Una variable declarada existe dentro de todo el entorno de trabajo.",
      "Todas las respuestas ANTERIORES son correctas,",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Una variable a la cual no se le ha asignado un valor contiene \"null\",",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Procedimientos Almacenados - Caracteristicas:",
    "Respuestas Incorrectas": [
      "Devuelven mas de un valor de retorno (escalar) que indica el éxito o falla de su ejecución.",
      "No pueden llamar a otros SPs (o sea dentro de un SP no se puede llamar a otros SP).",
      "No pueden devolver valores en la forma de parámetros de salida.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Aceptan parámetros de entrada.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Procedimientos Almacenados - Caracteristicas:",
    "Respuestas Incorrectas": [
      "No aceptan parámetros de entrada.",
      "No pueden llamar a otros SPs (o sea dentro de un SP no se puede llamar a otros SP).",
      "No pueden devolver valores en la forma de parámetros de salida.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Devuelven un valor de retorno (escalar) que indica el éxito o falla de su ejecución.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Procedimientos Almacenados - Ventajas:",
    "Respuestas Incorrectas": [
      "Encapsulan la lógica de negocio y crean piezas de código reutilizable por la aplicación.",
      "Todas las aplicaciones pueden usar los mismos procedimientos para asegurar un acceso consistente a los datos.",
      "Evitan la exposición de los detalles de las tablas al usuario, haciendo innecesario el acceso a las tablas en",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Todas las respuestas ANTERIORES son correctas.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Procedimientos Almacenados - Parametros:",
    "Respuestas Incorrectas": [
      "Cuando se definen parámetros de entrada y salida, estos siempre van finalizados por el signo @, con nombre del parámetro anteponiendose, y luego una designación del tipo de dato.",
      "Los parámetros de entrada impiden pasar información al SP. Estos valores son ingresados como variables locales al momento de la ejecucion dentro del procedimiento almacenado.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Los parámetros de salida deben incluir la palabra clave OUTPUT para diferenciar de los de entrada.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Tipos de funciones - Funciones Tabulares en Linea:",
    "Respuestas Incorrectas": [
      "Devuelven un solo tipo de valor definido en la clausula \"Returns\".",
      "Es similar a un procedimiento, salvo que puede referenciarse como si se tratara de una tabla.",
      "Este tipo de funciones es sintacticamente similar a funciones del tipo COUNT(), MAX().",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Devuelve una tabla que es el resultado de de una unica sentencia SELECT.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Dado el siguiente código de Store Procedure de SQL indicar el enunciado correcto.",
    "Respuestas Incorrectas": [
      "Confeccionar un SP que permita insertar un nuevo dispositivo en la tabla dbo.Inventariodispositivos. Si ya existe un registro con el mismo Marca y Modelo, debe actualizar todos los campos (Memoria, Procesador y Marca). Si el Modelo ya está registrado pero la Marca es diferente, debe actualizar solo los valores de Memoria y Procesador sin generar ningún error.",
      "Confeccionar un SP que permita insertar un nuevo celular en la tabla dbo.Inventariocelulares. Si ya existe un registro con el mismo Modelo, se debe actualizar solo el campo Marca y dejar intactos los valores de Memoria y Procesador. Si se intenta insertar un nuevo registro con un Modelo y Marca duplicados, el procedimiento debe permitir la inserción sin lanzar ningún error.",
      "Ninguno de los enunciados ANTERIORES es correcto. Codigo Incorrecto"
    ],
    "Respuesta correcta": "Confeccionar un SP que permita insertar un nuevo celular en la tabla dbo.Inventariocelulares. Si ya existe un registro con el mismo Modelo pero con una Marca diferente, se debe permitir la inserción de un nuevo registro sin procesador, y si el valor ingresado es una Marca y Modelo diferente a los ya cargados se debe cargar el nuevo registro, y si los datos son duplicados se generar el error.",
    "Imagen": "imagenes/1-DadoElSiguienteCodigoDeStoreProcedureDeSQLIndicarElEnunciadoCorrecto.png"
  },
  {
    "Enunciado": "2) Dado el siguiente código de Store Procedure de SQL indicar el enunciado correcto.",
    "Respuestas Incorrectas": [
      "Creacion de Tabla dbo. NumeroPar y Store Procedure que permita insertar números pares del 4 al 22 en una tabla con el nombre dbo. NumeroPar (nro smallint). Excepto los números 8, 12 y 18. La tabla debe ser creada en el procedimiento.",
      "Creacion de Tabla dbo.NumeroPar y Store Procedure que permita insertar números pares del 4 al 21 en una tabla con el nombre dbo. NumeroPar (nro smallint). Excepto los números 8, 12 y 18. La tabla debe ser creada fuera del procedimiento.",
      "Creacion de Tabla dbo. NumeroPar y Store Procedure que permita insertar números pares del 4 al 21 en una tabla con el nombre dbo. Numeros Par (nro smallint). Excepto los números 8, 12 y 18. La tabla debe ser creada fuera del procedimiento.",
      "Creacion de Tabla dbo. NumeroPar y Store Procedure que permita insertar números pares del 4 al 21 en una tabla con el nombre dbo. NumeroPar (nro smallint). Excepto los números 8, 12 y 18. La tabla debe ser creada fuera del procedimiento."
    ],
    "Respuesta correcta": "Ninguno de los enunciados ANTERIORES es correcto. Codigo Incorrecto",
    "Imagen": "imagenes/2-DadoElSiguienteCodigoDeStoreProcedureDeSQLIndicarElEnunciadoCorrecto.png"
  },
   {
    "Enunciado": "4) Dado el siguiente código de Store Procedure de SQL indicar el enunciado correcto.",
    "Respuestas Incorrectas": [
      "Creacion de Store Procedure que inserte a la tabla dbo. NumeroPar el número ingresado... sólo se deberá insertar si el número es par. De lo contrario lanzar una excepción. La tabla debe ser creada en el procedimiento.",
      "Creacion de Store Procedure que inserte a la tabla dbo. NumeroPar el número ingresado automaticamente, pero sólo se deberá insertar si el número es par. De lo contrario lanzar una excepción. La tabla debe ser creada fuera del procedimiento.",
      "Ninguno de los enunciados ANTERIORES es correcto. Codigo Incorrecto"
    ],
    "Respuesta correcta": "Creacion de Store Procedure que inserte a la tabla dbo. NumeroPar el número ingresado por parámetro, pero sólo se deberá insertar si el número es par. De lo contrario lanzar una excepción. La tabla debe ser creada fuera del procedimiento,",
    "Imagen": "imagenes/4-DadoElSiguienteCodigoDeStoreProcedureDeSQLIndicarElEnunciadoCorrecto.png"
  },
  {
    "Enunciado": "1) ¿Qué hace el siguiente trigger INSTEAD OF DELETE en la tabla Employees?",
    "Respuestas Incorrectas": [
      "El trigger permite la eliminación de empleados, pero registra la acción en una tabla de auditoría.",
      "El trigger permite la eliminación de empleados y muestra un mensaje de error después de la eliminación.",
      "El trigger reemplaza el contenido de la tabla Employees por una nueva tabla temporal y muestra un mensaje de error.",
      "Ninguno de los enunciados ANTERIORES es correcto."
    ],
    "Respuesta correcta": "El trigger impide la eliminación de registros en la tabla Employees y muestra un mensaje de error.",
    "Imagen": "imagenes/1-QueHaceElSiguienteTriggerINSTEADOFDELETEEnLaTablaEmployees.png"
  },
  {
    "Enunciado": "1) Entidades de seguridad y seguridad de objetos de base de datos:",
    "Respuestas Incorrectas": [
      "El ámbito de influencia de una entidad de seguridad no depende del ámbito de su definición: Windows, servidor o base de datos; y de si la entidad de seguridad es indivisible o es una colección.",
      "Un Inicio de sesión de Windows es un ejemplo de entidad de seguridad divisible y un Grupo de Windows es un ejemplo de una del tipo colección.",
      "Todas las respuestas ANTERIORES son correcta."
    ],
    "Respuesta correcta": "Ninguna de TODAS las respuestas ANTERIORES es correcta.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Usuario y esquema dbo.",
    "Respuestas Incorrectas": [
      "El usuario dbo es una tabla de seguridad de usuario especial que hay en cada base de datos.",
      "Todos los administradores de SQL Server, los miembros del rol fijo de servidor sysdba, el inicio de sesión sa y los propietarios de la base de datos especifican las bases de datos como el usuario dbo.",
      "El usuario dbo tiene todos los permisos en la base de datos master y se limitar o desactivar.",
      "Todas las respuestas ANTERIORES son correcta.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "El rol fijo de base de datos db_owner no es lo mismo que la cuenta de usuario que se registra como el propietario de la base de datos.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Inicio de sesión sa:",
    "Respuestas Incorrectas": [
      "La cuenta sa se crea de forma predeterminada cuando se instala una base de datos.",
      "La base de datos predeterminada de la cuenta sa es msdb.",
      "El inicio de sesión, la cuenta sa es miembro del rol fijo de nivel de servidor sysdba.",
      "Este inicio de sesión, la cuenta sa tiene todos los permisos en el servidor y puede limitarse.",
      "Todas las respuestas ANTERIORES son correcta."
    ],
    "Respuesta correcta": "Ninguna de TODAS las respuestas ANTERIORES es correcta.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Rol público de base de datos y de servidor:",
    "Respuestas Incorrectas": [
      "Cada inicio de sesión pertenece al rol fijo de servidor public y cada usuario de base de datos pertenece al rol de base de datos public.",
      "Cuando a un usuario o início de sesión no se le han concedido ni denegado permisos concretos para un elemento protegible, hereda los permisos para ese elemento concedidos a public.",
      "El rol fijo de servidor public y el de base de datos public no pueden quitarse, pero se puede revocar los permisos de los roles public.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Todas las respuestas ANTERIORES son correcta.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Elementos protegibles => Ámbito protegible: servidor.",
    "Respuestas Incorrectas": [
      "Grupo de disponibilidad, Punto de conexión, Iniciar sesión, Rol del servidor, Enlace de servicio remoto.",
      "Grupo de disponibilidad, Clave simétrica, Iniciar sesión, Rol del servidor, Base de datos.",
      "Grupo de disponibilidad, Punto de conexión, Certificate, Rol del servidor, (Base de datos) Rol.",
      "Todas las respuestas ANTERIORES son correcta.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Grupo de disponibilidad, Punto de conexión, Iniciar sesión, Rol del servidor, Base de datos.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Triggers: Nivel de base de datos",
    "Respuestas Incorrectas": [
      "Responden a la necesidad de garantizar la integridad y consistencia de los datos dentro de nuestras tablas de usuario.",
      "No ayudan a mantener las reglas de diseño de nuestra base de datos.",
      "Nos proporcionarán mecanismos para garantizar que nuestra base de datos está diseñada e implementada",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Todas las respuestas ANTERIORES son conectas.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Triggers: Nivel de base de datos",
    "Respuestas Incorrectas": [
      "Responden a la necesidad de garantizar la integridad y disponibilidad de los datos dentro de nuestras tablas de usuario.",
      "No ayudan a mantener las reglas de actualizacion de nuestra base de datos.",
      "Nos proporcionarán mecanismos para garantizar que nuestra base de datos está diseñada e implementada de acuerdo a los estándares de la instalacion por defecto.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Tienen dos alcances diferenciados, a nivel de servidor y a nivel de base de datos.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Transacciones Explícitas:",
    "Respuestas Incorrectas": [
      "Es aquella en que se define al final de la transacción para validar la propiedad ACID.",
      "Reciben el nombre de tablas definidas por el usuario.",
      "Deben realizarse un control automatico de ejecucion para cumplir con la propiedad ACID.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Se inician y finalizan Precisamente mediante comandos como BEGIN TRANSACTION, COMMIT, y ROLLBACK.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Características ACID: => Aislamiento (Isolation)",
    "Respuestas Incorrectas": [
      "Esta propiedad asegura que una transacción se ejecute de manera completa o no se ejecute en absoluto.",
      "Garantiza que una transacción lleve a la base de datos de un estado válido a otro estado válido.",
      "Garantiza que los cambios realizados por la transacción se guardan de forma que no se perderán, garantizando la integridad de los datos.",
      "Todas las respuestas ANTERIORES son correctas."
    ],
    "Respuesta correcta": "Asegura que las transacciones concurrentes se ejecuten de manera que no afecten entre sí.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Caracteristicas de los cursores - instrucciones:",
    "Respuestas Incorrectas": [
      "DECLARE => define el comportamiento de desplazamiento y la consulta utilizada para generar el conjunto de atributos sobre el que opera el cursor.",
      "OPEN => llena el conjunto de atributos que deben ser analizados para el comportamiento de las sentencias.",
      "FETCH => devuelve el valor de un atributo de la tabla del conjunto de resultados.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "CLOSE => libera el conjunto de resultados actual asociado al cursor.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) ¿Qué sentencia es necesaria para abrir un cursor en SQL?",
    "Respuestas Incorrectas": [
      "ACTIVATE nombre_del_cursor",
      "START nombre_del_cursor",
      "EXECUTE nombre_del_cursor",
      "Ninguno de los enunciados ANTERIORES es correcto"
    ],
    "Respuesta correcta": "OPEN nombre_del_cursor",
    "Imagen": ""
  } , 
  {
    "Enunciado": "1) Variables SQL:",
    "Respuestas Incorrectas": [
      "Permiten almacenar un valor y recuperarlo en sentencias anteriores a ser declarada para emplearlos en otras sentencias.",
      "Son específicas de cada consulta y son ejecutadas automáticamente al realizar la conexión.",
      "Comienzan con \"@\" (arroba) seguido del nombre (sin espacios), dicho nombre no puede contener cualquier carácter.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Una variable debe ser declarada antes de usarse.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Variables SQL:",
    "Respuestas Incorrectas": [
      "Son específicas de cada consulta y son ejecutadas automáticamente al realizar la conexión.",
      "Comienzan con \"@\" (arroba) seguido del nombre (sin espacios), dicho nombre no puede contener cualquier carácter.",
      "Una variable debe ser declarada al final para usarse en el codigo anterior."
    ],
    "Respuesta correcta": "Permiten almacenar un valor y recuperarlo más adelante para emplearlos en otras sentencias.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Variables SQL - Caracteristicas:",
    "Respuestas Incorrectas": [
      "Puede declarar varias variables en una misma sentencia.",
      "No existen variables globales en SQL Server.",
      "Una variable declarada existe dentro del entorno en que se declara.",
      "Una variable a la cual no se le ha asignado un valor contiene \"null\".",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Todas las respuestas ANTERIORES son correctas.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Procedimientos Almacenados:",
    "Respuestas Incorrectas": [
      "Es un grupo de sentencias T-SQL compiladas dentro de un plan de una query.",
      "Son variables de control de flujo de ejecución, para la implementación de bloques condicionales o repetitivos.",
      "Son querys y variables que encapsulan código para su reutilización.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Son un método de encapsular tareas repetitivas que involucran variables definidas por el usuario para cálculos intermedios.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Procedimientos Almacenados:",
    "Respuestas Incorrectas": [
      "Son querys y variables que encapsulan código para su reutilización.",
      "Todas las respuestas ANTERIORES son correctas."
    ],
    "Respuesta correcta": "Ninguna de TODAS las respuestas ANTERIORES es correcta.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Procedimientos Almacenados - Caracteristicas:",
    "Respuestas Incorrectas": [
      "No aceptan parámetros de entrada.",
      "No Pueden llamar a otros SPs (o sea dentro de un SP de puede llamar a otros SP).",
      "No pueden devolver valores en la forma de parámetros de salida.",
      "Todas las respuestas ANTERIORES son correctas."
    ],
    "Respuesta correcta": "Ninguna de TODAS las respuestas ANTERIORES es correcta.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Procedimientos Almacenados - Caracteristicas:",
    "Respuestas Incorrectas": [
      "Devuelven mas de un valor de retorno (escalar) que indica el éxito o falla de su ejecución.",
      "No pueden llamar a otros SPs (o sea dentro de un SP no se puede llamar a otros SP).",
      "No pueden devolver valores en la forma de parámetros de salida.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Aceptan parámetros de entrada.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Procedimientos Almacenados - Ventajas:",
    "Respuestas Incorrectas": [
      "Encapsulan la lógica de negocio y crean piezas de código reutilizable por la aplicación.",
      "Todas las aplicaciones pueden usar los mismos procedimientos para asegurar un acceso consistente a los datos.",
      "Evitan la exposición de los detalles de las tablas al usuario, haciendo innecesario el acceso a las tablas",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Todas las respuestas ANTERIORES son correctas.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Procedimientos Almacenados - Parametros:",
    "Respuestas Incorrectas": [
      "Cuando se definen parámetros de entrada y salida, estos siempre van finalizados por el signo @, con nombre del parámetro anteponiendose, y luego una designación del tipo de dato.",
      "Los parámetros de salida deben incluir la palabra clave OUTPUT para diferenciar de los de entrada.",
      "Los Procedimientos nunca pueden incluir parámetros en su definición, de modo tal que pueda crear una lógica de comportamiento más genérica.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Los parámetros de entrada permiten pasar información al SP. Estos valores son usados como variables locales dentro del procedimiento almacenado.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Procedimientos Almacenados - Parametros:",
    "Respuestas Incorrectas": [
      "Cuando se definen parámetros de entrada y salida, estos siempre van finalizados por el signo @, con nombre del parámetro anteponiendose, y luego una designación del tipo de dato.",
      "Los parámetros de salida deben incluir la palabra clave PUTOUT para diferenciar de los de entrada.",
      "Los Procedimientos nunca pueden incluir parámetros en su definición, de modo tal que pueda crear una lógica de comportamiento más genérica.",
      "Los parámetros de entrada impiden pasar información al S P. Estos valores son ingresados como variables locales al momento de la ejecucion dentro del procedimiento almacenado.",
      "Todas las respuestas ANTERIORES son correctas."
    ],
    "Respuesta correcta": "Ninguna de TODAS las respuestas ANTERIORES es correcta.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Tipos de funciones - Funciones Tabulares MultiSentencias:",
    "Respuestas Incorrectas": [
      "Devuelve una tabla que es el resultado de de una unica sentencia SELECT.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Devuelve una tabla construida por una o mas sentencias Transact-SQL.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Tipos de funciones - Funciones Escalares:",
    "Respuestas Incorrectas": [
      "Devuelve una tabla que es el resultado de de una unica sentencia SELECT.",
      "Es similar a un procedimiento, salvo que puede referenciarse como si se tratara de una tabla.",
      "Es similar a una vista ofreciendo mas flexibilidad.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Devuelven un solo tipo de valor definido en la clausula 'Returns'.",
    "Imagen": ""
  },
  {
    "Enunciado": "4) Dado el siguiente código de Store Procedure de SQL indicar el enunciado correcto.",
    "Respuestas Incorrectas": [
      "Confeccionar un SP que permita insertar un nuevo celular en la tabla dbo.Inventariocelulares. Si ya existe cargado el mismo Modelo con Marca diferente, se debe permitir la inserción de un nuevo registro sin generar ningún error. Si el Modelo y la Marca coinciden, se deben actualizar todos los campos del celular (Marca, Memoria, Procesador). En caso de registro, no se debe realizar ninguna acción.",
      "Confeccionar un SP para insertar un nuevo Celular en la tabla dbo. Inventariocelulares. Si ya existe un registro con el mismo Modelo, se debe actualizar solo los campos nuevos del celular con los valores de memoria y procesador, y si el valor ingresado es una Marca y Modelo diferente a los ya cargados se debe cargar el nuevo registro, y si los datos son duplicados se generar el error y manejarlo.",
      "Confeccionar un SP para insertar un nuevo celular en la tabla dbo.Inventariocelulares. Si ya existe un registro con el mismo Modelo, se debe actualizar solo el campo Marca y dejar intactos los valores de Memoria y Procesador. Si se intenta insertar un nuevo registro con un Modelo y Marca duplicados, el procedimiento debe permitir la inserción sin lanzar ningún error."
    ],
    "Respuesta correcta": "Ninguno de los enunciados ANTERIORES es correcto. Codigo Incorrecto",
    "Imagen": "imagenes/4-PARCIAL2-DadoElSiguienteCodigoDeStoreProcedureDeSQLIndicarElEnunciadoCorrecto.png"
  },
  {
    "Enunciado": "1) ¿Cuál es el resultado de la siguiente instrucción SQL para crear un trigger AFTER DELETE en la tabla Clientes?",
    "Respuestas Incorrectas": [
      "El trigger previene la eliminación de clientes en la tabla Clientes.",
      "El trigger actualiza la tabla Clientes cada vez que se elimina un cliente.",
      "El trigger registra todas las acciones que ocurren en la tabla Clientes, independientemente de si son eliminaciones, inserciones o actualizaciones, insertando el ID del cliente, la acción y la fecha.",
      "Ninguno de los enunciados ANTERIORES es correcto."
    ],
    "Respuesta correcta": "El trigger registra las eliminaciones de clientes en la tabla Cliente_Log, insertando el ID del cliente eliminado, la acción y la fecha de la eliminación.",
    "Imagen": "imagenes/1-PARCIAL2-CualEsElResultadoDeLaSiguienteInstruccionSQLParaCrearUnTriggerAFTERDELETEEnTablaClientes.png"
  },
  {
    "Enunciado": "1) Entidades de seguridad y seguridad de objetos de base de datos:",
    "Respuestas Incorrectas": [
      "Toda entidad de seguridad tiene un identificador de seguridad (PID).",
      "Este tema se aplica a todas las versiones de SQL Server, y no hay algunas restricciones en las entidades de seguridad a nivel de servidor de SQL Database.",
      "Todas las respuestas ANTERIORES son correcta.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "El ámbito de influencia de una entidad de seguridad depende del ámbito de su definición: Windows, servidor o base de datos; y de si la entidad de seguridad es indivisible o es una colección.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Inicio de sesión sa:",
    "Respuestas Incorrectas": [
      "El inicio de sesión de SQL Server, la cuenta sa es una entidad de seguridad a nivel de servidor.",
      "La cuenta sa se crea de forma predeterminada cuando se instala una instancia.",
      "El inicio de sesión sa es miembro del rol fijo de nivel de servidor sysadmin.",
      "Este inicio de sesión, la cuenta sa tiene todos los permisos en el servidor y no puede limitarse.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Todas las respuestas ANTERIORES son correcta.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Usuario y esquema dbo:",
    "Respuestas Incorrectas": [
      "El usuario dbo es una tabla de seguridad de usuario especial que hay en cada base de datos.",
      "Todos los administradores de SQL Server, los miembros del rol fijo de servidor sysdba, el inicio de sesión sa y los propietarios de la base de datos especifican las bases de datos como el usuario dbo.",
      "El usuario dbo tiene todos los permisos en la base de datos master y se limitar o desactivar.",
      "Todas las respuestas ANTERIORES son correcta.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "El rol fijo de base de datos db_owner no es lo mismo que la cuenta de usuario que se registra como el propietario de la base de datos.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Rol público de base de datos y de servidor:",
    "Respuestas Incorrectas": [
      "El rol fijo de servidor public y el de base de datos public no pueden quitarse, pero se puede revocar los permisos de los roles public.",
      "Hay muchos de los permisos que se asignan a los roles public de forma predeterminada. La mayoría de estos permisos son necesarios para realizar operaciones rutinarias en la base de datos; el tipo de tareas que todos los usuarios deben poder hacer.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Todas las respuestas ANTERIORES son correcta.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Elementos protegibles => Ámbito protegible: esquema OBJETOS:",
    "Respuestas Incorrectas": [
      "Esquemas XML, Agregada, Función, Ver, Tabla externa.",
      "Procedimiento, Tipo, Cola, Synonym, Usuario.",
      "Procedimiento, Tipo, Cola, Synonym, Tabla.",
      "Todas las respuestas ANTERIORES son correcta.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Agregada, Función, Ver, Tabla externa.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Jerarquía de cifrado => Conceptos:",
    "Respuestas Incorrectas": [
      "Las claves maestras de base de datos se protegen mediante la clave asimétricas maestra de servicio.",
      "La clave maestra de servicio y todas las claves maestras de base de datos son claves asimétricas.",
      "El módulo de Administración extensible de claves (EKM) mantiene las claves asimétricas o simétricas fuera de SQL Server.",
      "Todas las respuestas ANTERIORES son correcta.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "La clave maestra de servicio y todas las claves maestras de base de datos son claves simétricas.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Triggers: Nivel de base de datos",
    "Respuestas Incorrectas": [
      "No ayudan a mantener las reglas de actualizacion de nuestra base de datos.",
      "Nos proporcionarán mecanismos para garantizar que nuestra base de datos está diseñada e implementada de acuerdo a los estándares de la instalacion por defecto.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "A esta categoría de eventos pertenecen entre otros los de CREATE/ALTER/DROP View - CREATE / ALTER /DROP Table - CREATE/ALTER/DROP Schema",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Triggers:",
    "Respuestas Incorrectas": [
      "Los TRIGGERS son muy similares en su concepto a los procedimientos almacenados, son código Transact-SQL similares en codigo y ejecucion.",
      "La manipulación de datos son del tipo TRIGGERS DMZ o por la manipulación de esquemas como los TRIGGERS DLL.",
      "Reciben parámetros de una forma muy especial, en forma de unas tablas virtuales, llamadas inserted y deleted.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Un TRIGGER se ejecuta en respuesta a un evento.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Características de los cursores:",
    "Respuestas Incorrectas": [
      "Nos permite movernos por los registros de una consulta como un único bloque para analizar el resultado todo junto.",
      "Nos permite recorrer los registros del resultado obtenido de una sentencia WHERE.",
      "Se usa para realizar una acción si el código identificador de un registro no es autonumérico.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Su uso permiten procesar el conjunto de resultados de fila en fila.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) ¿Qué sentencia es necesaria para abrir un cursor en SQL?",
    "Respuestas Incorrectas": [
      "ACTIVATE nombre_del_cursor",
      "START nombre_del_cursor",
      "EXECUTE nombre_del_cursor",
      "Ninguno de los enunciados ANTERIORES es correcto"
    ],
    "Respuesta correcta": "OPEN nombre_del_cursor",
    "Imagen": ""
  }, //////////////////////////////////
   {
    "Enunciado": "1) Variables SQL - Caracteristicas:",
    "Respuestas Incorrectas": [
      "Solo se puede declarar varias variables en una misma sentencia.",
      "Existen variables globales en SQL Server.",
      "Una variable declarada existe dentro de todo el entorno de trabajo."
    ],
    "Respuesta correcta": "Una variable a la cual no se le ha asignado un valor contiene \"null\".",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Variables SQL - Caracteristicas:",
    "Respuestas Incorrectas": [
      "Existen variables globales en SQL Server.",
      "Una variable declarada existe dentro de todo el entorno de trabajo.",
      "Una variable a la cual no se le ha asignado un valor contiene \"0\" (Cero).",      
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Puede declarar varias variables en una misma sentencia.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Procedimientos Almacenados - Caracteristicas:",
    "Respuestas Incorrectas": [
      "No aceptan parámetros de entrada.",
      "Devuelven mas de un valor de retorno (escalar) que indica el éxito o falla de su ejecución.",
      "No pueden llamar a otros SPs (o sea dentro de un SP no se puede llamar a otros SP).",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Pueden devolver valores en la forma de parámetros de salida.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Procedimientos Almacenados - Ventajas:",
    "Respuestas Incorrectas": [
      "Encapsulan la lógica de negocio y crean piezas de código reutilizable por la aplicación.",
      "incrementa sensiblemente la seguridad.",
      "Puede otorgarse permisos de ejecución a un procedimiento a un usuario aun cuando no tenga permisos sobre las tablas o vistas usadas por el procedimiento.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Todas las respuestas ANTERIORES son correctas.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Procedimientos Almacenados - Parametros:",
    "Respuestas Incorrectas": [
      "Cuando se definen parámetros de entrada y salida, estos siempre van finalizados por el signo @, con nombre del parámetro anteponiendose, y luego una designación del tipo de dato.",
      "Los parámetros de salida deben incluir la palabra clave PUTOUT para diferenciar de los de entrada.",
      "Los Procedimientos nunca pueden incluir parámetros en su definición, de modo tal que pueda crear una lógica de comportamiento más genérica.",
      "Todas las respuestas ANTERIORES son correctas."
    ],
    "Respuesta correcta": "Los parámetros de entrada permiten pasar información al SP. Estos valores son usados como variables locales dentro del procedimiento almacenado.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Tipos de funciones - Funciones Escalares:",
    "Respuestas Incorrectas": [
      "Devuelve una tabla que es el resultado de de una unica sentencia SELECT.",
      "Devuelve una tabla que es el resultado de de una unica sentencia SELECT.",
      "Es similar a una vista ofreciendo mas flexibilidad."
    ],
    "Respuesta correcta": "Este tipo de funciones es sintacticamente similar a funciones del tipo COUNT(), MAX().",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Tipos de funciones - Funciones Tabulares MultiSentencias:",
    "Respuestas Incorrectas": [
      "Devuelve una tabla que es el resultado de de una unica sentencia SELECT.",
      "Devuelven un solo tipo de valor definido en la clausula \"Returns\".",
      "Este tipo de funciones es sintacticamente similar a funciones del tipo COUNT(), MAX().",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Es similar a un procedimiento, salvo que puede referenciarse como si se tratara de una tabla.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Dado el siguiente código de Store Procedure de SQL indicar el enunciado correcto. (p_InsCulture)",
    "Respuestas Incorrectas": [
      "Confeccionar el Store procedure p_InsCulture(id,name,date) que permita actualiza el CultureName y la ModifiedDate de un registro en la tabla Production.Culture, basándose en el CultureID dado.",
      "Confeccionar el Store procedure p_InsCulture(id,name,date) que permita agrega un nuevo campo a la tabla Production.Culture y asigna los valores de CultureID, CultureName y ModifiedDate como parámetros de entrada.",
      "Confeccionar el Store procedure p_InsCulture (id,name,date) que permita inserta un nuevo registro en la tabla Production.Culture únicamente si el CultureName no existe previamente en la tabla.",
      "Confeccionar el Store procedure p_InsCulture (id,name,date) que devuelva el número total de registros en la tabla Production.Culture después de insertar un nuevo CultureID, CultureName y ModifiedDate.",
      "Ninguno de los enunciados ANTERIORES es correcto. Codigo Incorrecto"
    ],
    "Respuesta correcta": "Confeccionar el Store procedure p_InsCulture (id,name,date) que permita dar de alta un nuevo registro en la tabla Production.Culture. Los tipos de datos de los parámetros deben corresponderse con la tabla.",
    "Imagen": "imagenes/4PARCIAL-1-STOREPROCEDURE.png"
  },
  {
    "Enunciado": "4) Dado el siguiente código de Store Procedure de SQL indicar el enunciado correcto. (InsertOrUpdateMovie)",
    "Respuestas Incorrectas": [
      "Confeccionar un SP para insertar una nueva película en la tabla. Si ya existe un registro con la misma combinación de ID y Titulo, se debe actualizar el campo Duracion de ese registro. Si se produce algún error durante la operación, se debe manejar.",
      "Confeccionar un SP para insertar una nueva película en la tabla. Si ya existe un registro con la misma combinación de ID y Genero, se debe insertar un nuevo registro sin realizar ninguna actualización. Si se produce un error durante la operación, se debe manejar.",
      "Confeccionar un SP para que permita insertar Peliculas... excepto que el ID y el Genero... ya exista en la tabla, en caso de duplicado, actualizar el valor duracion...",
      "Confeccionar un SP para insertar una nueva película en la tabla. Si ya existe un registro con la misma combinacion de ID y Genero, se debe eliminar el registro existente y luego insertar el nuevo. En caso de error, mostrar mensaje indicando que la película ya existe."
    ],
    "Respuesta correcta": "Ninguno de los enunciados ANTERIORES es correcto. Codigo Incorrecto",
    "Imagen": "imagenes/4PARCIAL-4-STOREPROCEDURE.png"
  },
  {
    "Enunciado": "1) ¿Qué hace el siguiente trigger AFTER INSERT en la tabla Orders? (trg_OrderInsert)",
    "Respuestas Incorrectas": [
      "El trigger actualiza la columna Status en la tabla Orders después de cada inserción.",
      "El trigger bloquea cualquier inserción en la tabla Orders.",
      "El trigger elimina el registro recién insertado en la tabla Orders.",
      "Ninguno de los enunciados ANTERIORES es correcto."
    ],
    "Respuesta correcta": "El trigger inserta un nuevo registro en la tabla OrderHistory cada vez que se inserta un nuevo pedido en Orders.",
    "Imagen": "imagenes/4PARCIAL-1-TRIGGER.png"
  },
  {
    "Enunciado": "1) SQL Server admite los siguientes tipos de inicios de sesión:",
    "Respuestas Incorrectas": [
      "SQL Server usa Windows para autenticar cuentas de usuario de Active Directory para el servidor Windows que no esta en el dominio donde esta instalador el motor de Base de Datos.",
      "SQL Server usa usuarios locales del servidor donde esta instalado el motor de Base de Datos, y conceder acceso a un grupo de Windows otorga acceso por medio de la base de datos master.",
      "SQL Server: SQL Server almacena el nombre de usuario y un hash de la contraseña en la base de datos msdb.",
      "Todas las respuestas ANTERIORES son correcta.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "SQL Server admite usuarios de base de datos independientes para la autenticación de Windows y SQL Server.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Inicio de sesión sa:",
    "Respuestas Incorrectas": [
      "La cuenta sa se crea de forma predeterminada cuando se instala una base de datos.",
      "La base de datos predeterminada de la cuenta sa es msdb.",
      "Este inicio de sesión, la cuenta sa tiene todos los permisos en el servidor y puede limitarse.",
      "Todas las respuestas ANTERIORES son correcta.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "El inicio de sesión sa es miembro del rol fijo de nivel de servidor sysadmin.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Rol público de base de datos y de servidor.",
    "Respuestas Incorrectas": [
      "Cada inicio de sesión pertenece al rol fijo de servidor public y cada usuario de base de datos pertenece al rol de base de datos master.",
      "Cuando a un usuario o inicio de sesión se le han concedido permisos concretos para un elemento protegible, hereda los permisos para ese elemento concedidos a public.",
      "Necesarios para realizar operaciones rutinarias en la base de datos; el tipo de tareas que los dba deben poder hacer.",
      "Todas las respuestas ANTERIORES son correcta."
    ],
    "Respuesta correcta": "Ninguna de TODAS las respuestas ANTERIORES es correcta.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Elementos protegibles => Ámbito protegible: servidor.",
    "Respuestas Incorrectas": [
      "Grupo de disponibilidad, Punto de conexión, Iniciar sesión, Rol del servidor, Ruta.",
      "Grupo de disponibilidad, Clave simétrica, Iniciar sesión, Rol del servidor, Base de datos.",
      "Grupo de disponibilidad, Punto de conexión, Certificate, Rol del servidor, Base de datos.",
      "Todas las respuestas ANTERIORES son correcta.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Grupo de disponibilidad, Punto de conexión, Iniciar sesión, Rol del servidor, Base de datos.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Jerarquía de cifrado => Conceptos:",
    "Respuestas Incorrectas": [
      "Para obtener el máximo rendimiento, cifre los datos utilizando claves asimétricas en lugar de certificados o claves simétricas.",
      "Las claves maestras de base de datos se protegen mediante la clave asimétricas maestra de servicio.",
      "La clave maestra de servicio y todas las claves maestras de base de datos son claves asimétricas.",
      "Todas las respuestas ANTERIORES son correcta.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "El módulo de Administración extensible de claves (EKM) mantiene las claves simétricas o asimétricas fuera de SQL Server.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) ¿Qué tablas virtuales se pueden utilizar dentro de un trigger para acceder a las filas afectadas por la operación de modificación de datos?",
    "Respuestas Incorrectas": [
      "#inserted y #deleted",
      "@inserted y @deleted",
      "new y old",
      "Ninguno de los enunciados ANTERIORES es correcto."
    ],
    "Respuesta correcta": "inserted y deleted",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Triggers: INSTEAD OF",
    "Respuestas Incorrectas": [
      "Se disparan en paralelo de la operación que los produce.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Una operación de borrado de registros con la instrucción delete sobre una tabla que tiene un TRIGGER de tipo INSTEAD OF, cuando detecta esta operación invoca al TRIGGER que es el responsable de actuar sobre los registros afectados.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Características ACID: => Atomicidad (Atomicity)",
    "Respuestas Incorrectas": [
      "Asegura que las transacciones concurrentes se ejecuten de manera que no afecten entre sí.",
      "Garantiza que los cambios realizados por la transacción se guardan de forma que no se perderán, garantizando la integridad de los datos.",
      "Garantiza que una transacción lleve a la base de datos de un estado válido a otro estado válido.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Esta propiedad asegura que una transacción se ejecute de manera completa o no se ejecute en absoluto.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Características ACID: => Aislamiento (Isolation)",
    "Respuestas Incorrectas": [
      "Garantiza que una transacción lleve a la base de datos de un estado válido a otro estado válido.",
      "Garantiza que los cambios realizados por la transacción se guardan de forma que no se perderán, garantizando la integridad de los datos.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Asegura que las transacciones concurrentes se ejecuten de manera que no afecten entre sí.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Características de los cursores:",
    "Respuestas Incorrectas": [
      "Nos permite movernos por los registros de una consulta como un único bloque para analizar el resultado todo junto.",
      "Nos permite recorrer los registros del resultado obtenido de una sentencia WHERE.",
      "Se usa para realizar una acción si el código identificador de un registro no es autonumérico.",
      "Todas las respuestas ANTERIORES son correctas."
    ],
    "Respuesta correcta": "Su uso permiten procesar el conjunto de resultados de fila en fila.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Dado el siguiente cursor en SQL:",
    "Respuestas Incorrectas": [
      "Insertar todos los nombres de productos en una nueva tabla.",
      "Eliminar todos los registros en la tabla Products.",
      "Actualizar el nombre del producto en la tabla Products.",
      "Ninguna de las opciones ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Imprimir todos los nombres de productos de la tabla Products uno por uno.",
    "Imagen": "imagenes/CURSORES.png"
  },
  {
    "Enunciado": "1) Variables SQL:",
    "Respuestas Incorrectas": [
      "Permiten almacenar un valor y recuperarlo en sentencias anteriores a ser declarada para emplearlos en otras sentencias.",
      "Son específicas de cada consulta y son ejecutadas automáticamente al realizar la conexión.",
      "Comienzan con \"@\" (arroba) seguido del nombre (sin espacios), dicho nombre no puede contener cualquier carácter.",
      "Una variable debe ser declarada al final para usarse en el codigo anterior.",
      "Todas las respuestas ANTERIORES son correctas."
    ],
    "Respuesta correcta": "Ninguna de TODAS las respuestas ANTERIORES es correcta.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Variables SQL:",
    "Respuestas Incorrectas": [
      "Permiten almacenar un valor y recuperarlo en sentencias anteriores a ser declarada para emplearlos en otras sentencias.",
      "Son específicas de cada consulta y son ejecutadas automáticamente al realizar la conexión.",
      "Una variable debe ser declarada al final para usarse en el codigo anterior.",
      "Todas las respuestas ANTERIORES son correctas."
    ],
    "Respuesta correcta": "Comienzan con \"@\" (arroba) seguido del nombre (sin espacios), dicho nombre puede contener cualquier carácter.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Variables SQL-Caracteristicas:",
    "Respuestas Incorrectas": [
      "Solo se puede declarar varias variables en una misma sentencia.",
      "Existen variables globales en SQL Server.",
      "Una variable a la cual no se le ha asignado un valor contiene \"0\" (Cero).",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Una variable declarada existe dentro del entorno en que se declara.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Procedimientos Almacenados:",
    "Respuestas Incorrectas": [
      "Es un grupo de sentencias T-SQL compiladas dentro de un plan de una query.",
      "Son un método de encapsular tareas repetitivas que no involucran variables definidas por el motor de SQL para cálculos intermedios.",
      "Son variables de control de flujo de ejecución, para la implementación de bloques condicionales o repetitivos.",
      "Son querys y variables que encapsulan código para su reutilización.",
      "Todas las respuestas ANTERIORES son correctas."
    ],
    "Respuesta correcta": "Ninguna de TODAS las respuestas ANTERIORES es correcta.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Procedimientos Almacenados:",
    "Respuestas Incorrectas": [
      "Es un grupo de sentencias T-SQL compiladas dentro de un plan de ejecución.",
      "Son un método de encapsular tareas repetitivas que involucran variables definidas por el usuario para cálculos intermedios.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Todas las respuestas ANTERIORES son correctas.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Procedimientos Almacenados - Caracteristicas:",
    "Respuestas Incorrectas": [
      "Devuelven mas de un valor de retorno (escalar) que indica el éxito o falla de su ejecución.",
      "No pueden llamar a otros SPs (o sea dentro de un SP no se puede llamar a otros SP).",
      "No pueden devolver valores en la forma de parámetros de salida.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Aceptan parámetros de entrada.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Procedimientos Almacenados - Caracteristicas:",
    "Respuestas Incorrectas": [
      "No aceptan parámetros de entrada.",
      "No pueden llamar a otros SPs (o sea dentro de un SP no se puede llamar a otros SP).",
      "No pueden devolver valores en la forma de parámetros de salida.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Devuelven un valor de retorno (escalar) que indica el éxito o falla de su ejecución.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Procedimientos Almacenados - Ventajas:",
    "Respuestas Incorrectas": [
      "Encapsulan la lógica de negocio y crean piezas de código reutilizable por la aplicación.",
      "Todas las aplicaciones pueden usar los mismos procedimientos para asegurar un acceso consistente a los datos.",
      "Evitan la exposición de los detalles de las tablas al usuario, haciendo innecesario el acceso a las tablas en forma directa, lo que incrementa sensiblemente la seguridad.",
      "Puede otorgarse permisos de ejecución a un procedimiento a un usuario aun cuando no tenga permisos sobre las tablas o vistas usadas por el procedimiento.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Todas las respuestas ANTERIORES son correctas.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Procedimientos Almacenados - Parametros:",
    "Respuestas Incorrectas": [
      "Cuando se definen parámetros de entrada y salida, estos siempre van finalizados por el signo @, con nombre del parámetro anteponiendose, y luego una designación del tipo de dato.",
      "Los Procedimientos nunca pueden incluir parámetros en su definición, de modo tal que pueda crear una lógica de comportamiento más genérica.",
      "Los parámetros de entrada impiden pasar información al SP. Estos valores son ingresados como variables locales al momento de la ejecucion dentro del procedimiento almacenado.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Los parámetros de salida deben incluir la palabra clave OUTPUT para diferenciar de los de entrada.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Procedimientos Almacenados - Parametros:",
    "Respuestas Incorrectas": [
      "Cuando se definen parámetros de entrada y salida, estos siempre van finalizados por el signo @, con nombre del parámetro anteponiendose, y luego una designación del tipo de dato.",
      "Los parámetros de salida deben incluir la palabra clave PUTOUT para diferenciar de los de entrada.",
      "Los parámetros de entrada impiden pasar información al SP. Estos valores son ingresados como variables locales al momento de la ejecucion dentro del procedimiento almacenado.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Los Procedimientos son más flexibles cuando le incluimos parámetros en su definición, de modo tal que pueda crear una lógica de comportamiento más genérica.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Tipos de funciones - Funciones Tabulares en Linea:",
    "Respuestas Incorrectas": [
      "Devuelve una tabla que es el resultado de de una unica sentencia SELECT.",
      "Devuelven un solo tipo de valor definido en la clausula \"Returns\".",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Es similar a una vista ofreciendo mas flexibilidad.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Dado el siguiente código de Store Procedure de SQL indicar el enunciado correcto. (InsertOrUpdateMovie)",
    "Respuestas Incorrectas": [
      "Confeccionar un SP para insertar una nueva película en la tabla. Si ya existe un registro con la misma combinación de ID y Titulo, se debe actualizar el campo Duracion de ese registro. Si se produce algún error durante la operación, se debe manejar.",
      "Confeccionar un SP para insertar una nueva película en la tabla. Si ya existe un registro con la misma combinación de ID y Genero, se debe insertar un nuevo registro sin realizar ninguna actualización. Si se produce un error durante la operación, se debe manejar.",
      "Confeccionar un SP para insertar una nueva película en la tabla. Si ya existe un registro con la misma combinación de ID y Genero, se debe eliminar el registro existente y luego insertar el nuevo. En caso de error, mostrar mensaje indicando que la película ya existe.",
      
    ],
    "Respuesta correcta": "Ninguno de los enunciados ANTERIORES es correcto. Codigo Incorrecto.",
    "Imagen": "imagenes/2-PARCIAL2-DadoElSiguienteCodigoDeStoreProcedureDeSQLIndicarElEnunciadoCorrecto.png"
  },
  {
    "Enunciado": "2) Dado el siguiente código de Store Procedure de SQL indicar el enunciado correcto. (dbo.alumnos)",
    "Respuestas Incorrectas": [
      "Confeccionar un SP que permita insertar una nueva persona en la tabla dbo.alumnos. Si ya existe un registro con la misma persona, se debe actualizar los campos nuevos del alumno, y si los valores ingresados son identicos a los del alumno ya cargado, se debe generar el error correspondiente y manejarlo.",
      "Confeccionar un SP que permita insertar una nueva persona en la tabla dbo.estudiantes. Si ya existe un registro con el mismo DNI, se debe actualizar el nombre, teléfono y correo electrónico. En caso de intentar insertar una persona con un DNI que ya existe, pero con un nombre distinto, debe actualizar también el nombre sin generar ningún error.",
      "Confeccionar un SP que permita insertar una nueva persona en la tabla dbo.personas. Si ya existe un registro con el mismo DNI y el mismo nombre_completo, debe actualizar únicamente el campo email (sin tocar el celular). Si el DNI existe pero el nombre_completo es diferente, debe permitir insertar un nuevo registro duplicado con el mismo DNI y el nuevo nombre_completo.",
      "Ninguno de los enunciados ANTERIORES es correcto. Codigo Incorrecto"
    ],
    "Respuesta correcta": "Confeccionar un SP que permita insertar una nueva persona en la tabla dbo.alumnos. Si ya existe un registro con la misma persona, se debe actualizar solo los campos nuevos del celular y email, y si el valor ingresado es un DNI igual y nombre-apellido diferentes a uno ya cargado se debe generar el error correspondiente y manejarlo.",
    "Imagen": "imagenes/3PARCIAL-2-STOREPROCEDURE.png"
  },
  {
    "Enunciado": "4) Dado el siguiente código de Store Procedure de SQL indicar el enunciado correcto. (p_InsClientes)",
    "Respuestas Incorrectas": [
      "Confeccionar la creacion de tabla dbo. Clientes y el Store procedure que permita insertar Personas (con el campo DNI, Apellido y Nombre) en una tabla con el nombre dbo. Clientes, excepto que el DNI ya exista en la tabla se actualiza el Apellido y Nombre en caso de duplicado, y generar el manejo de error correspondiente.",
      "Confeccionar la creacion de tabla dbo. Clientes y el Store procedure que permita insertar Personas (con el campo DNI, Apellido y Nombre) en una tabla con el nombre dbo.Clientes, en caso de que el DNI ya exista, simplemente lo ignora y no genera ningún error.",
      "Confeccionar la creacion de tabla dbo. Clientes y el Store procedure que permita insertar Personas (con el campo DNI, Apellido y Nombre) en una tabla con el nombre dbo. Cliente, excepto que el DNI ya exista en la tabla. En caso de que exista la persona a cargar, generar el manejo de error correspondiente.",
      "Ninguno de los enunciados ANTERIORES es correcto. Codigo Incorrecto"
    ],
    "Respuesta correcta": "Confeccionar la creacion de tabla dbo. Clientes y el Store procedure que permita insertar Personas (con el campo DNI, Apellido y Nombre) en una tabla con el nombre dbo. Clientes, excepto que el DNI ya exista en la tabla. En caso de que exista la persona a cargar, generar el manejo de error correspondiente.",
    "Imagen": "imagenes/3PARCIAL-4-STOREPROCEDURE.png"
  },
  {
    "Enunciado": "1) ¿Qué hace el siguiente trigger AFTER INSERT en la tabla Orders?",
    "Respuestas Incorrectas": [
      "El trigger actualiza la columna Status en la tabla Orders después de cada inserción.",
      "El trigger bloquea cualquier inserción en la tabla Orders.",
      "El trigger elimina el registro recién insertado en la tabla Orders.",
      "Ninguno de los enunciados ANTERIORES es correcto."
    ],
    "Respuesta correcta": "El trigger inserta un nuevo registro en la tabla OrderHistory cada vez que se inserta un nuevo pedido en Orders.",
    "Imagen": "imagenes/3PARCIAL-1-TRIGGER.png"
  },
  {
    "Enunciado": "1) SQL Server admite los siguientes tipos de inicios de sesión:",
    "Respuestas Incorrectas": [
      "SQL Server usa Windows para autenticar cuentas de usuario de Windows ya sea de Active Directory.",
      "SQL Server usa usuarios locales del servidor donde esta instalado el motor de Base de Datos, y conceder acceso a un grupo de Windows otorga acceso a todos los inicios de sesión de usuario de Windows que son miembros del grupo.",
      "SQL Server almacena el nombre de usuario y un hash de la contraseña en la base de datos master.",
      "SQL Server admite usuarios de base de datos independientes para la autenticación de Windows y SQL Server",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Todas las respuestas ANTERIORES son correcta.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Inicio de sesión sa:",
    "Respuestas Incorrectas": [
      "La cuenta sa se crea de forma predeterminada cuando se instala una base de datos.",
      "La base de datos predeterminada de la cuenta sa es msdb.",
      "El inicio de sesión, la cuenta sa es miembro del rol fijo de nivel de servidor sysdba.",
      "Todas las respuestas ANTERIORES son correcta."
    ],
    "Respuesta correcta": "El inicio de sesión de SQL Server, la cuenta sa es una entidad de seguridad a nivel de servidor.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Usuario y esquema dbo:",
    "Respuestas Incorrectas": [
      "Todos los administradores de SQL Server, los miembros del rol fijo de servidor sysdba, el inicio de sesión sa y los propietarios de la base de datos especifican las bases de datos como el usuario dbo.",
      "El usuario dbo tiene todos los permisos en la base de datos master y se limitar o desactivar.",
      "La cuenta de usuario dbo es lo mismo que el rol fijo de base de datos db_owner.",
      "El rol fijo de base de datos db_owner es lo mismo que la cuenta de usuario que se registra como el propietario de la base de datos.",
      "Todas las respuestas ANTERIORES son correcta."
    ],
    "Respuesta correcta": "Ninguna de TODAS las respuestas ANTERIORES es correcta.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Rol público de base de datos y de servidor:",
    "Respuestas Incorrectas": [
      "Cada inicio de sesión pertenece al rol fijo de servidor public y cada usuario de base de datos pertenece al rol de base de datos public.",
      "Cuando a un usuario o inicio de sesión no se le han concedido ni denegado permisos concretos para un elemento protegible, hereda los permisos para ese elemento concedidos a public.",
      "El rol fijo de servidor public y el de base de datos public no pueden quitarse, pero se puede revocar los permisos de los roles public.",
      "Hay muchos de los permisos que se asignan a los roles public de forma predeterminada. La mayoría de estos permisos son necesarios para realizar operaciones rutinarias en la base de datos; el tipo de tareas que todos los usuarios deben poder hacer.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Todas las respuestas ANTERIORES son correcta.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Triggers:",
    "Respuestas Incorrectas": [
      "Los TRIGGERS son muy similares en su concepto a los procedimientos almacenados, son código Transact-SQL similares en codigo y ejecucion.",
      "La manipulación de datos son del tipo TRIGGERS DMZ o por la manipulación de esquemas como los TRIGGERS DLL.",
      "Reciben parámetros de una forma muy especial, en forma de unas tablas virtuales, llamadas inserted y deleted.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Un TRIGGER se ejecuta en respuesta a un evento.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Triggers: Nivel de servidor",
    "Respuestas Incorrectas": [
      "Responden a los eventos que son propios de la base de datos y no a los que están en el alcance de la instancia.",
      "Están muy alineadas con las de los que son a nivel de Instancia e incluso la información.",
      "La Clausula ON ALL SERVER dentro de una instruccion CREATE TRIGGER no afectaria a todo el servidor sino a la Base de Datos especificada.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "A esta categoría de eventos pertenecen entre otros los de CREATE LOGIN CREATE/ALTER/DROP Database y los relativos por ejemplo a los nuevos ENDPOINTS.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Transacciones Implicitas:",
    "Respuestas Incorrectas": [
      "Debe validar la totalidad de la ejecución para que confirmar o revertir cada transacción.",
      "Genera una cadena fraccionada de transacciones.",
      "Inicia manualmente una nueva transacción después de confirmar o revertir la transacción anterior.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "No tiene que realizar ninguna acción para delinear el inicio de una transacción.",
    "Imagen": ""
  },
  {
    "Enunciado": "2) Características ACID: => Atomicidad (Atomicity)",
    "Respuestas Incorrectas": [
      "Asegura que las transacciones concurrentes se ejecuten de manera que no afecten entre sí.",
      "Garantiza que los cambios realizados por la transacción se guardan de forma que no se perderán, garantizando la integridad de los datos.",
      "Garantiza que una transacción lleve a la base de datos de un estado válido a otro estado válido.",
      "Todas las respuestas ANTERIORES son correctas.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Esta propiedad asegura que una transacción se ejecute de manera completa o no se ejecute en absoluto.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) Caracteristicas de los cursores - instrucciones:",
    "Respuestas Incorrectas": [
      "DECLARE => define el comportamiento de desplazamiento y la consulta utilizada para generar el conjunto de resultados sobre el que opera el cursor.",
      "OPEN => llena el conjunto de resultados.",
      "FETCH => devuelve una fila del conjunto de resultados.",
      "CLOSE => libera el conjunto de resultados actual asociado al cursor.",
      "Ninguna de TODAS las respuestas ANTERIORES es correcta."
    ],
    "Respuesta correcta": "Todas las respuestas ANTERIORES son correctas.",
    "Imagen": ""
  },
  {
    "Enunciado": "1) ¿Cuál es la sentencia correcta para liberar la memoria de un cursor después de utilizarlo?",
    "Respuestas Incorrectas": [
      "FREE nombre_del_cursor",
      "CLOSE nombre_del_cursor",
      "SHUTDOWN nombre_del_cursor",
      "Ninguna de las opciones ANTERIORES es correcta."
    ],
    "Respuesta correcta": "DEALLOCATE nombre_del_cursor",
    "Imagen": ""
  }
];


let preguntasDelExamen = [];


function mezclarArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}



/**
 * Función para seleccionar preguntas (CON VALIDACIÓN DE IMAGEN)
 * @param {Array} todasLasPreguntas - El array json_preguntas completo
 * @param {Number} cantidad - El número total de preguntas deseadas
 */
function seleccionarPreguntas(todasLasPreguntas, cantidad) {
  
  const conImagen = mezclarArray([...todasLasPreguntas.filter(p => p.Imagen && p.Imagen.trim() !== "")]);
  const sinImagen = mezclarArray([...todasLasPreguntas.filter(p => !p.Imagen || p.Imagen.trim() === "")]);

  const preguntasSeleccionadas = [];
  const imgRequeridas = 4;

  let cantidadImgATomar = imgRequeridas;
  if (conImagen.length < imgRequeridas) {
    console.warn(`No se encontraron ${imgRequeridas} preguntas con imagen. Se incluirán ${conImagen.length}.`);
    cantidadImgATomar = conImagen.length;
  }

  const imgTomadas = conImagen.slice(0, cantidadImgATomar);
  preguntasSeleccionadas.push(...imgTomadas);

  const cantidadRestante = cantidad - preguntasSeleccionadas.length;
  
  if (cantidadRestante > 0) {
    const sinImgTomadas = sinImagen.slice(0, cantidadRestante);
    preguntasSeleccionadas.push(...sinImgTomadas);

    const shortfall = cantidad - preguntasSeleccionadas.length;
    if (shortfall > 0) {
      const conImagenRestantes = conImagen.slice(cantidadImgATomar);
      preguntasSeleccionadas.push(...conImagenRestantes.slice(0, shortfall));
    }
  }

  return mezclarArray(preguntasSeleccionadas);
}


function generarExamen() {
  const preguntasContainer = document.getElementById('preguntasContainer');
  
  
  const selectCantidad = document.getElementById('cantidadPreguntas');
  let cantidad = selectCantidad.value;

  if (cantidad === 'full') {
    cantidad = json_preguntas.length; 
  } else {
    cantidad = parseInt(cantidad, 10); 
  }
  
  
  if (cantidad > json_preguntas.length) {
    cantidad = json_preguntas.length;
  }


  preguntasDelExamen = seleccionarPreguntas(json_preguntas, cantidad);
  
  let examenHTML = '';

  preguntasDelExamen.forEach((pregunta, index) => {
    
    const incorrectas = Array.isArray(pregunta['Respuestas Incorrectas']) 
                           ? pregunta['Respuestas Incorrectas'] 
                           : [];

    const todasLasRespuestas = [
      ...incorrectas,
      pregunta['Respuesta correcta']
    ];
    const respuestasMezcladas = mezclarArray(todasLasRespuestas);

    const opcionesHTML = respuestasMezcladas.map((respuesta, opcionIndex) => {
      const idUnico = `p${index}-o${opcionIndex}`;
      const valorRespuesta = respuesta.replace(/"/g, '&quot;');

      return `
        <div class="form-check">
          <input class="form-check-input" type="radio" 
                 name="pregunta-${index}" 
                 id="${idUnico}" 
                 value="${valorRespuesta}" 
                 required>
          <label class="form-check-label" for="${idUnico}">
            ${respuesta}
          </label>
        </div>
      `;
    }).join('');

    examenHTML += `
      <div class="card mb-4 shadow-sm color-div" id="card-pregunta-${index}">
        <div class="card-header bg-white color-div">
          <h5 class="mb-0">Pregunta ${index + 1}</h5>
        </div>
        <div class="card-body">
          <p class="card-text fs-5">${pregunta.Enunciado}</p>
          
          ${pregunta.Imagen ? `<img src="${pregunta.Imagen}" class="img-fluid mb-3" alt="Imagen de la pregunta">` : ''}
          
          <div class="respuestas-container">
            ${opcionesHTML}
          </div>
        </div>
      </div>
    `;
  });

  preguntasContainer.innerHTML = examenHTML;

  document.getElementById('setupContainer').style.display = 'none';
  document.getElementById('examenForm').style.display = 'block';
}

function corregirExamen(event) {
 event.preventDefault(); // Evita que el formulario se envíe

 let correctas = 0;
let incorrectas = 0;

 const form = event.target;
 const formData = new FormData(form);

 // 1. Bucle de corrección (esto queda igual)
 preguntasDelExamen.forEach((pregunta, index) => {

const respuestaCorrecta = pregunta['Respuesta correcta'];
const respuestaUsuario = formData.get(`pregunta-${index}`);

 const radios = document.querySelectorAll(`input[name="pregunta-${index}"]`);

// Deshabilita inputs y marca visualmente las respuestas
 radios.forEach(radio => {
   radio.disabled = true;
   const label = radio.nextElementSibling;

   if (radio.value === respuestaCorrecta) {
    label.classList.add('respuesta-correcta'); // Marca la correcta en verde
   } else if (radio.value === respuestaUsuario && respuestaUsuario !== respuestaCorrecta) {
    label.classList.add('respuesta-incorrecta-usuario'); // Marca la elegida incorrecta en rojo
   }
  });

  // Conteo de puntos
  if (respuestaUsuario === respuestaCorrecta) {
   correctas++;
  } else {
   incorrectas++;
  }
 });

 // =================================================================
 // 2. INICIO DE LA LÓGICA DE APROBACIÓN CORREGIDA (Según tu pedido)
 // =================================================================
 
 // Obtenemos el total de preguntas que realmente se mostraron
 const totalPreguntas = preguntasDelExamen.length;
 
 // Calculamos el porcentaje (con .toFixed(2) para mostrar solo 2 decimales)
 const porcentaje = totalPreguntas > 0 ? (correctas / totalPreguntas) * 100 : 0;
 
 // Determinamos la nota según la escala
 let nota = 0; // Nota por defecto (desaprobado)
 if (porcentaje >= 100) {
  nota = 10;
 } else if (porcentaje >= 90) {
  nota = 9;
 } else if (porcentaje >= 80) {
  nota = 8;
 } else if (porcentaje >= 70) {
  nota = 6;
 } else if (porcentaje >= 65) {
  nota = 5;
 } else if (porcentaje >= 60) {
  nota = 4;
 } else {
  nota = 2; // O la nota de desaprobado que prefieras (ej: 2)
 }
 
 // Determinamos si aprobó (60% o más)
 const aprobado = porcentaje >= 60;

 // =================================================================
 // 3. FIN DE LA LÓGICA CORREGIDA
 // =================================================================

 const resultadoContainer = document.getElementById('resultadoContainer');

 // 4. Mostramos el HTML del resultado (actualizado para incluir la Nota)
 resultadoContainer.innerHTML = `
  <div class="alert ${aprobado ? 'alert-success' : 'alert-danger'} shadow p-4">
   <h2 class="alert-heading text-center">${aprobado ? '¡APROBADO! 🎉' : 'DESAPROBADO 😥'}</h2>
   <hr>
   <p class="fs-3 text-center mb-1">
    Nota Final: <strong class="fs-2">${nota}</strong>
   </p>
   <p class="fs-5 text-center mb-3">
    (Porcentaje de aciertos: ${porcentaje.toFixed(2)}%)
   </p>
   <p class="fs-5 text-center mb-0">
    Correctas: <strong>${correctas}</strong> | Incorrectas: <strong>${incorrectas}</strong> (de ${totalPreguntas} preguntas)
   </p>

   <div class="text-center mt-4">
    <button type="button" id="btnRestaurar" class="btn btn-secondary">
 Volver a Realizar el Examen
 </button>
 </div>
 </div>
 `;

 // 5. Lógica restante de la función (igual que antes)
 document.getElementById('btnRestaurar').addEventListener('click', restaurarExamen);
 document.getElementById('btnSubmit').disabled = true;
 document.getElementById('btnSubmit').innerText = 'Examen Corregido';

 resultadoContainer.scrollIntoView({ behavior: 'smooth' });
}




document.addEventListener('DOMContentLoaded', () => {
  const examenForm = document.getElementById('examenForm');
  examenForm.addEventListener('submit', corregirExamen);

  const btnIniciar = document.getElementById('btnIniciarExamen');
  btnIniciar.addEventListener('click', generarExamen);
});


function restaurarExamen() {
  document.getElementById('resultadoContainer').innerHTML = '';

  const btnSubmit = document.getElementById('btnSubmit');
  btnSubmit.disabled = false;
  btnSubmit.innerText = 'Entregar y Corregir Examen';

  document.getElementById('examenForm').style.display = 'none';
  document.getElementById('preguntasContainer').innerHTML = '';

  document.getElementById('setupContainer').style.display = 'block';
  
  document.getElementById('setupContainer').scrollIntoView({ behavior: 'smooth' });
}
