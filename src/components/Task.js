import "../App.css"

export function Task()
{
    return(
        <div class="table">
            <table>
                <thead>
                    <th>Task NO.</th>
                    <th>Github Link</th>
                    <th>Deployment Link</th>
                </thead>
                <tr>
                    <td>Task1</td>
                    <td><a href="https://github.com/ansh87913/React-Frontend-1" target="_main">Link 1</a></td>
                    <td><a href="https://react-frontend-1.vercel.app/" target="_main">Link 1</a></td>
                </tr>
                <tr>
                    <td>Task2</td>
                    <td><a href="https://github.com/ansh87913/React-Frontend-2" target="_main">Link 1</a></td>
                    <td>
                        <a href="https://react-frontend-2.vercel.app/" target="_main">Link 2</a>
                    </td>
                </tr>
                <tr>
                    <td>Task 3</td>
                    <td><a href="https://github.com/ansh87913/React-Frontend-3" target="_main">Link 1</a></td>
                    <td>
                        <a href="https://react-frontend-3.vercel.app/" target="_main">Link 3</a>
                    </td>
                </tr>
                <tr>
                    <td>Task 4</td>
                    <td><a href="https://github.com/ansh87913/React-Frontend-4" target="_main">Link 1</a></td>
                    <td>
                        <a href="https://react-frontend-4.vercel.app/" target="_main">Link 4</a>
                    </td>
                </tr>
                <tr>
                    <td>Task 5</td>
                    <td><a href="https://github.com/ansh87913/React-Frontend-5" target="_main">Link 1</a></td>
                    <td>
                        <a href="https://react-frontend-5.vercel.app/" target="_main">Link 5</a>
                    </td>
                </tr>
                <tr>
                    <td>Task 6</td>
                    <td><a href="https://github.com/ansh87913/React-Frontend-6" target="_main">Link 1</a></td>
                    <td>
                        <a href="https://react-frontend-6.vercel.app/" target="_main">Link 6</a>
                    </td>
                </tr>
            </table>
        </div>
    )
}
