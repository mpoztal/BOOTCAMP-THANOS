### APP SERIES

        1 - Componentes - Cuantos?

            - header
            - listaItems
            - card
            - vistaPersonaje
            - vistaSerie
                - reparto (dentro de vistaSerie)
                - temporadas (dentro de vistaSerie)
            - filtros


        2 - Interfaces. ¿Cuantas entidades o tablas de datos hay?. Interfaces en singular

            - personaje
            - serie

        3 - Servicios. Van enlazados con los interfaces, asi que casi siempre son los mismos. Servicios en plural

            - personajes
            - series

        4 - Rutas. Cuantas, formación de cada ruta.¿Tenemos rutas dinámicas o activas?. ¿Hay rutas hijas?. 

            - "" redirija a "/series"
            - "series" cargamos --> componente listaItems
            - "personajes" cargamos --> componente listaItems
            - "personaje/:idpersonaje" componente vistaPersonaje
            - "serie/:idserie" componente vistaSerie
               - "" redirija "reparto"
               - 'reparto' componente Reparto
               - 'temporadas' componente Temporadas  
            - "canal/:nombreCanal" , componente listaItems
            - "**" redirija "/series"

      investigar como averiguar en angular en que ruta estatica estoy.
        Condicional pediendo a cada servicio el array de series y el de personajes.

