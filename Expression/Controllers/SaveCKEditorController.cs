using Expression.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Pipes;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Expression.Controllers
{
    public class SaveCKEditorController : Controller
    {
        public ActionResult Index(SaveCKEditorModel data)
        {
            if (String.IsNullOrWhiteSpace(data.editabledata))
                return null;

            MemoryStream stream = new MemoryStream(Encoding.UTF8.GetBytes(data.editabledata)); 
            string suggestedFilename = string.Format("CKEditor_{0}.txt", data.DocumentName);


            return new FileStreamResult(stream, "application/octet-stream");
        }
    }

  
}