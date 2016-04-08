using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace Expression.Controllers
{
    public class OpenCKEditorController : Controller
    {
        [HttpPost]
        public ActionResult Index()
        {
            var file = Request.Files[0];
            BinaryReader b = new BinaryReader(file.InputStream);
            byte[] binData = b.ReadBytes((int)file.InputStream.Length);

            string data = System.Text.Encoding.UTF8.GetString(binData);
            return Json(new { result = data });
        }
    }
}