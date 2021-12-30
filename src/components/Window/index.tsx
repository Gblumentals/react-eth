
import './Window.css';
import Dialog from '@material-ui/core/Dialog'
import Backdrop from '@material-ui/core/Backdrop'

type Props = {
  text: string
  cb: () => void
}

const Window = (props: Props) => {

  console.log("Window, props.callback ", props.cb)

  return (
    <Backdrop
      open={true}
    >
      <Dialog open={true} className="Window-Dialog" onClick={() => {props.cb()}}>
        {props.text}
      </Dialog>
    </Backdrop>
  );
}

export default Window;
