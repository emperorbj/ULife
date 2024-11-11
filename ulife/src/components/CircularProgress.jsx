import {
    ProgressCircleRing,
    ProgressCircleRoot,
} from "@/components/ui/progress-circle"

const CircularProgress = () => {



    return (
        <ProgressCircleRoot colorPalette='teal' size="lg" value={70}>
            <ProgressCircleRing />
        </ProgressCircleRoot>
    )
}

export default CircularProgress
