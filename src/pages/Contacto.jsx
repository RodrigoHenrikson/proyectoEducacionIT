import MainLayout from "../components/layout/main/MainLayout"
import Componentcontacto from "../components/layout/contacto/Componentcontacto"

export default function Contacto()
{
    return (
        <MainLayout pageTitle={"Contactános"} pageDescription={"¡Rellena el formulario y te estaremos respondiendo a la velocidad de la luz!"}>
            <Componentcontacto />
        </MainLayout>
    )
}