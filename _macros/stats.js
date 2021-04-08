/****************************************************
 *
 *  stats.js
 *
 *  statistics macros for mathjax, easy typing. also some mathematics and physics things as well for nicer web math viewing...
 *
 *  ---------------------------------------------------------------------
 *
 *  Feel Free to change it up to adapt to your needs.
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */



MathJax.Hub.Register.StartupHook("TeX Jax Ready", function () {
  MathJax.InputJax.TeX.Definitions.Add({
    macros: {
      card: ["Macro", "{\\text{card}\\left( #1 \\right)}", 1]
    }
  });
});
