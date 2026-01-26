import { Syringe, Stethoscope, Sparkles, ShieldCheck, Activity, Package } from "lucide-react";

const products = [
    {
        title: "Materiales de Restauración",
        description: "Resinas, amalgamas, cementos y composites de las mejores marcas.",
        icon: Syringe
    },
    {
        title: "Instrumental Dental",
        description: "Espejos, sondas, pinzas, fórceps y más instrumentos de precisión.",
        icon: Stethoscope
    },
    {
        title: "Blanqueamiento",
        description: "Sistemas de blanqueamiento profesional y productos de estética dental.",
        icon: Sparkles
    },
    {
        title: "Bioseguridad",
        description: "Guantes, cubrebocas, desinfectantes y material de protección.",
        icon: ShieldCheck
    },
    {
        title: "Endodoncia",
        description: "Limas, gutapercha, localizadores de ápice y sistemas rotatorios.",
        icon: Activity
    },
    {
        title: "Consumibles",
        description: "Algodón, gasas, eyectores, vasos y suministros generales.",
        icon: Package
    }
];

export default products;
