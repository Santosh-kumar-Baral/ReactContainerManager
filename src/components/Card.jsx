function MyDocker (props){

    return (
        <div id="root bg-blue-100">
            <div className="my-4 p-5 bg-blue-200 shadow-md rounded-lg justify-between mx-6">
                <div className="top">
                    <div className="logoimage">
                        <img className="mylogo rounded-full h-50 w-50 " src={props.logoimage}/>
                    </div>

                    <div className="buttoncontrols">
                        <button className="buttoncontrols border border-solid border-white bg-green-600 hover:bg-green-500 p-2 m-2 font-bold rounded">Restart</button>
                        <button className="buttoncontrols border border-solid border-white bg-red-600 hover:bg-red-500 p-2 m-2 font-bold rounded">Stop</button>
                    </div>

                    <div className="currentstatus">

                    <span className="font-bold">Status: </span>{props.status}
                    </div>

                </div>

                <div className="bottom">

                    <div className="liveterminal">
                    <span className="font-bold"> Terminal: </span>{props.terminal}

                    </div>

                    <div className="runscript">
                        Runscript
                    </div>



                </div>

            </div>

        </div>

    )
}

export default MyDocker;