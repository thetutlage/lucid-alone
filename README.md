# Adonis Lucid Without Framework

This repo shows how to make use of Adonisjs without the entire frameork.

This is not the ideal implementation, but does give some ideas on how to decouple the module from the entire framework.

Adonis works on the idea of Service providers and IoC bindings and by looking the code base of Lucid you can figure out, which all providers are required and you can create their subsitutes to make sure Lucid requirements are fulfilled.