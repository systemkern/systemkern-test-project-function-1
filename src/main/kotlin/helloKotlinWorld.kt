external fun require(module: String): dynamic
external val exports: dynamic

fun hello() = "Hello Kotlin World"

fun processRequest(req: dynamic, res: dynamic) {
    val message = """
        |Pushed from Github<br>
        |req.query.message: ${req.query.message}<br>
        |req.body.message: ${req.body.message}<br>
    """.trimMargin()

    res.status(200).send(message)
}
