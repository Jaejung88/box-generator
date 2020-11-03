const GenerateBox = (props) => {
    const {inputs, handleInfo, handleSubmit} = props;

    return (
        <div style={{margin:"0 auto", width: "fit-content"}}>
            <form onSubmit={handleSubmit}>
                <label>Color:</label>
                <input
                    type="text"
                    name="color"
                    value={inputs.color}
                    placeholder="Enter a color"
                    onChange={handleInfo}
                    onFocus={(e) => e.target.placeholder=""}
                    onBlur={(e) => e.target.placeholder="Enter a color"}
                />
                <label>Size:</label>
                <input
                    type="text"
                    name="size"
                    value={inputs.size}
                    placeholder="Enter size"
                    onChange={handleInfo}
                    onFocus={(e) => e.target.placeholder=""}
                    onBlur={(e) => e.target.placeholder="Enter size"}
                />
                <input type="submit" value="Add"/>
            </form>
        </div>
    )
}

export default GenerateBox;