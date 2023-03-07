import styles from './style.module.css';
import Demo2 from './Demo2';

const Demo = () => {
    return (
    <>
    {/* see how className is given: styles.demo, this assigns the css in styles.module.css to this h1 only */}
        <h1 className={styles.demo}> 
            This is a demo for CSS modules styling
        </h1>
        {/* css not applied to Demo2 */}
        <Demo2 />
    </>
    )
}
export default Demo;