import Drawer from 'react-modern-drawer'

type Props = {
	open: boolean
	onClose: () => void
}

const BottomDrawer = ({ open, onClose }: Props) => {
	return (
		<Drawer direction="bottom" open={open} onClose={onClose}>
			<h1>cheese</h1>
		</Drawer>
	)
}

export default BottomDrawer
